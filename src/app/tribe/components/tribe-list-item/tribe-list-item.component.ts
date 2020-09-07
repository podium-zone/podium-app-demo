import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../../engage/models/post';

@Component({
  selector: 'tribe-list-item',
  templateUrl: './tribe-list-item.component.html',
  styleUrls: ['./tribe-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TribeListItemComponent {
  readonly backgroundUrl = `url(/assets/podium-bgs/bg-${Math.floor(Math.random() * 10 + 1)}.jpg)`;

  @Input() tribe: Post;
}
