import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TribePageService } from '../../services/tribe-page.service';

@Component({
  selector: 'app-tribe-list',
  templateUrl: './tribe-list.page.html',
  styleUrls: ['./tribe-list.page.scss'],
})
export class TribeListPage implements OnInit {
  constructor(private pageService: TribePageService) {}

  readonly tribes$ = this.pageService.tribes$;
  private readonly tribesLimit = 21;

  ngOnInit() {
    this.pageService.getTribes().subscribe();
  }

  onInfinite(event) {
    setTimeout(() => {
      this.pageService
        .getTribes()
        .pipe(
          tap((tribes) => {
            event.target.complete();

            if (tribes.length >= this.tribesLimit) {
              event.target.disabled = true;
            }
          }),
        )
        .subscribe();
    }, 1000);
  }
}
