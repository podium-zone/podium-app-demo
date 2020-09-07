import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MembersComponent } from './members.component';

@NgModule({
  declarations: [MembersComponent],
  exports: [MembersComponent],
  imports: [CommonModule, IonicModule],
})
export class MembersModule {}
