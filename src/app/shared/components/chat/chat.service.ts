import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Comment } from '../../../engage/models/post';
import { EngageHttpService } from '../../../engage/services/engage-http.service';

@Injectable({ providedIn: 'root' })
export class ChatService implements OnDestroy {
  constructor(private httpService: EngageHttpService) {}

  private readonly likedContent = new BehaviorSubject<number[]>([]);
  private readonly comments = new BehaviorSubject<Comment[]>([]);
  private readonly disabledButtons = new BehaviorSubject<number[]>([]);

  readonly likedContent$ = this.likedContent.asObservable();
  readonly comments$ = this.comments.asObservable();
  readonly disabledButtons$ = this.disabledButtons.asObservable();

  readonly mappedComments$ = combineLatest([this.comments$, this.likedContent$, this.disabledButtons$]).pipe(
    map(([comments, likedContent, disabledButtons]) =>
      (comments || []).map((comment) => ({
        ...comment,
        liked: this.alreadyLiked(comment.id, likedContent),
        disabled: this.isDisabled(comment.id, disabledButtons),
        replies: comment.replies.map((reply) => ({
          ...reply,
          liked: this.alreadyLiked(reply.id, likedContent),
          disabled: this.isDisabled(reply.id, disabledButtons),
        })),
      })),
    ),
  );

  ngOnDestroy() {
    this.likedContent.complete();
    this.comments.complete();
    this.disabledButtons.complete();
  }

  setComments(comments: Comment[]) {
    this.comments.next(comments);
  }

  setLike(contentId: number) {
    this.likedContent.next([...this.likedContent.value, contentId]);
    this.disabledButtons.next([...this.disabledButtons.value, contentId]);
    this.httpService
      .setLike(contentId)
      .pipe(
        catchError(() => {
          this.removeLike(contentId);
          return of(null);
        }),
        finalize(() => this.enableButton(contentId)),
      )
      .subscribe();
  }

  setUnlike(contentId: number) {
    this.removeLike(contentId);
    this.disabledButtons.next([...this.disabledButtons.value, contentId]);
    this.httpService
      .setUnlike(contentId)
      .pipe(
        catchError(() => {
          this.likedContent.next([...this.likedContent.value, contentId]);
          return of(null);
        }),
        finalize(() => this.enableButton(contentId)),
      )
      .subscribe();
  }

  private enableButton(contentId: number) {
    const array = this.disabledButtons.value;
    const removedItemIndex = array.indexOf(contentId);
    array.splice(removedItemIndex, 1);
    this.disabledButtons.next(array);
  }

  private removeLike(contentId: number) {
    const array = this.likedContent.value;
    const removedItemIndex = array.indexOf(contentId);
    array.splice(removedItemIndex, 1);
    this.likedContent.next(array);
  }

  private alreadyLiked(contentId: number, likedContent: number[]) {
    return likedContent.some((content) => content === contentId);
  }

  private isDisabled(buttonId: number, disabledButtons: number[]) {
    return disabledButtons.some((button) => button === buttonId);
  }
}
