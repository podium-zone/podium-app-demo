import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './intro.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: IntroComponent,
      },
    ]),
  ],
  declarations: [IntroComponent],
})
export class IntroModule {}
