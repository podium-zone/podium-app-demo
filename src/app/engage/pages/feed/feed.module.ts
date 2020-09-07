import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LargeFeedItemComponent } from '../../components/large-feed-item/large-feed-item.component';
import { MediumFeedItemComponent } from '../../components/medium-feed-item/medium-feed-item.component';
import { FeedPage } from './feed.page';

@NgModule({
  imports: [CommonModule, RouterModule, IonicModule],
  declarations: [FeedPage, LargeFeedItemComponent, MediumFeedItemComponent],
})
export class FeedPageModule {}
