import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SharedModule } from '../shared/shared.module';
import { TribeCategoryComponent } from './components/tribe-category/tribe-category.component';
import { TribeListItemComponent } from './components/tribe-list-item/tribe-list-item.component';
import { TribeDetailsPage } from './pages/tribe-details/tribe-details.page';
import { TribeListPage } from './pages/tribe-list/tribe-list.page';
import { TribeComponent } from './pages/tribe/tribe.component';

@NgModule({
  declarations: [TribeComponent, TribeListPage, TribeListItemComponent, TribeDetailsPage, TribeCategoryComponent],
  imports: [
    CommonModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TribeComponent,
        children: [
          {
            path: '',
            component: TribeListPage,
          },
          {
            path: ':id',
            component: TribeDetailsPage,
          },
        ],
      },
    ]),
  ],
})
export class TribeModule {}
