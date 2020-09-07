import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from '../../models/post';
import { EngageHttpService } from '../../services/engage-http.service';

@Injectable({
  providedIn: 'root',
})
export class FeedPageService {
  constructor(private httpService: EngageHttpService) {}

  private pageIndex = 0;
  private pageLimit = 5;

  private readonly posts = new BehaviorSubject<Post[]>([]);
  readonly posts$ = this.posts.asObservable();

  getPosts() {
    return this.httpService.getPosts(this.pageIndex, this.pageLimit).pipe(
      tap((posts) => {
        this.posts.next([...this.posts.value, ...posts]);
        this.pageIndex++;
      }),
    );
  }
}
