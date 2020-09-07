import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FeedPageService } from './feed-page.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  constructor(private pageService: FeedPageService) {}

  readonly posts$ = this.pageService.posts$;
  private readonly postsLimit = 21;

  ngOnInit() {
    this.pageService.getPosts().subscribe();
  }

  onInfinite(event) {
    setTimeout(() => {
      this.pageService
        .getPosts()
        .pipe(
          tap((posts) => {
            event.target.complete();

            if (posts.length >= this.postsLimit) {
              event.target.disabled = true;
            }
          })
        )
        .subscribe();
    }, 1000);
  }
}
