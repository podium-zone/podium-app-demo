import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DaysSincePipe } from './days-since.pipe';

@NgModule({
  declarations: [DaysSincePipe],
  imports: [CommonModule],
  exports: [DaysSincePipe],
})
export class PipesModule {}
