import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Comment } from '../../../../engage/models/post';
import { ChatService } from '../chat.service';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  constructor(private pageService: ChatService) {}

  @Input() comment: Comment;

  like(contentId: number) {
    this.pageService.setLike(contentId);
  }

  unlike(contentId: number) {
    this.pageService.setUnlike(contentId);
  }
}
