import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';
import { ChatComponent } from './chat.component';
import { CommentComponent } from './comment/comment.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  exports: [ChatComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, IonicModule, PipesModule],
  declarations: [ChatComponent, MessageComponent, CommentComponent],
})
export class ChatModule {}
