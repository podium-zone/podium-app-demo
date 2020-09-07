import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'like-share',
  templateUrl: './like-share.component.html',
  styleUrls: ['./like-share.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeShareComponent {
  @Input() likes = 0;
  @Output() likeClicked = new EventEmitter();
  @Output() shareClicked = new EventEmitter();

  onLikeClick() {
    this.likeClicked.emit();
  }

  onShareClick() {
    this.shareClicked.emit();
  }
}
