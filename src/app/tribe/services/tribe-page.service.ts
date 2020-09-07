import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from '../../engage/models/post';
import { TribeHttpService } from './tribe-http.service';

@Injectable({
  providedIn: 'root',
})
export class TribePageService {
  constructor(private httpService: TribeHttpService) {}

  private pageIndex = 0;
  private pageLimit = 5;

  private readonly tribes = new BehaviorSubject<Post[]>([]);
  readonly tribes$ = this.tribes.asObservable();

  getTribes() {
    return this.httpService.getPosts(this.pageIndex, this.pageLimit).pipe(
      tap((tribes) => {
        this.tribes.next([...this.tribes.value, ...tribes]);
        this.pageIndex++;
      }),
    );
  }
}
