import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { EngagePostPageModule } from './pages/engage-post/enage-post.module';
import { EngagePostPage } from './pages/engage-post/engage-post.page';
import { EngageComponent } from './pages/engage/engage.component';
import { FeedPageModule } from './pages/feed/feed.module';
import { FeedPage } from './pages/feed/feed.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FeedPageModule,
    EngagePostPageModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EngageComponent,
        children: [
          {
            path: '',
            component: FeedPage,
          },
          {
            path: 'post/:id',
            component: EngagePostPage,
          },
        ],
      },
    ]),
  ],
  declarations: [EngageComponent],
})
export class EngageModule {}
