import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EngageHttpService } from '../../services/engage-http.service';

@Component({
  selector: 'app-engage-post',
  templateUrl: './engage-post.page.html',
  styleUrls: ['./engage-post.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EngagePostPage {
  constructor(private route: ActivatedRoute, private httpService: EngageHttpService) {}

  readonly backgroundUrl = `./assets/podium-bgs/bg-${Math.floor(Math.random() * 10 + 1)}.jpg`;
  readonly postContent$ = this.route.params.pipe(
    switchMap((params) => this.httpService.getPostById(Number(params.id)))
  );
}
