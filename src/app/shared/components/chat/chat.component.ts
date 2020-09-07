import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ChatService } from './chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnChanges {
  constructor(private fb: FormBuilder, private pageService: ChatService, private toast: ToastController) {}

  readonly form = this.initForm();
  readonly comments$ = this.pageService.mappedComments$;

  @Input() comments: Comment[];

  ngOnChanges(changes: SimpleChanges) {
    this.pageService.setComments(changes.comments.currentValue);
  }

  send() {
    console.log(this.form.value);
    this.toast.create({ message: this.form.value.comment });
  }

  private initForm() {
    return this.fb.group({
      comment: ['', [Validators.required]],
    });
  }
}
