import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  constructor(private fb: FormBuilder, private pageService: ChatService) {}

  readonly form = this.initForm();
  private readonly showReply = new BehaviorSubject<boolean>(false);
  readonly showReply$ = this.showReply.asObservable();

  @Input() message: Comment;

  send() {
    this.toggleReply();
  }

  toggleReply() {
    this.showReply.next(!this.showReply.value);
  }

  like(contentId: number) {
    this.pageService.setLike(contentId);
  }

  unlike(contentId: number) {
    this.pageService.setUnlike(contentId);
  }

  private initForm() {
    return this.fb.group({
      reply: ['', [Validators.required]],
    });
  }
}
