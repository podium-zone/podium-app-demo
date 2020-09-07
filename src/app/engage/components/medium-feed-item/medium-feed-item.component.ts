import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'medium-feed-item',
  templateUrl: './medium-feed-item.component.html',
  styleUrls: ['./medium-feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediumFeedItemComponent {
  readonly backgroundUrl = `url(/assets/podium-bgs/bg-${Math.floor(Math.random() * 10 + 1)}.jpg)`;

  @Input() post: Post;
}
