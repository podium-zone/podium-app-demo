import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../shared/shared.module';
import { LikeShareComponent } from '../../components/like-share/like-share.component';
import { EngagePostPage } from './engage-post.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SharedModule],
  declarations: [EngagePostPage, LikeShareComponent],
})
export class EngagePostPageModule {}
