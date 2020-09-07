import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'large-feed-item',
  templateUrl: './large-feed-item.component.html',
  styleUrls: ['./large-feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeFeedItemComponent {
  readonly backgroundUrl = `url(/assets/podium-bgs/bg-${Math.floor(Math.random() * 10 + 1)}.jpg)`;

  @Input() post: Post;
}
