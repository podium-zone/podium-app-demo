import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarComponent } from './calendar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CalendarComponent, HeaderComponent],
  imports: [CommonModule, MatDatepickerModule, MatMomentDateModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
