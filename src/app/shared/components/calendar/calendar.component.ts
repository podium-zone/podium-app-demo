import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  MatCalendar,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { Moment } from 'moment';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnChanges {
  headerComponent = HeaderComponent;
  availableDates: Moment[] = [];

  @ViewChild(MatCalendar, { static: true }) calendar: MatCalendar<Moment>;

  @Input() editMode: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.editMode && this.calendar.currentView) {
      this.calendar.updateTodaysDate();
    }
  }

  change(date: Moment) {
    if (!this.editMode) {
      return;
    }
    const index = this.availableDates.findIndex((moment) =>
      date.isSame(moment)
    );
    if (index > -1) {
      this.availableDates.splice(index, 1);
    } else {
      this.availableDates = [...this.availableDates, date];
    }
    this.calendar.updateTodaysDate();
  }

  dateClass(): MatCalendarCellCssClasses {
    return (date: Moment) => {
      if (!this.editMode) {
        return 'disabled-date';
      }
      const highlightDate = this.availableDates.some((d) => {
        return d.isSame(date);
      });
      return highlightDate ? 'available-date' : '';
    };
  }
}
