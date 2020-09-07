import { ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/** Custom header component for datepicker. */
@Component({
  selector: 'calendar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent<D> implements OnDestroy {
  private destroyed = new Subject<void>();

  constructor(
    private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get periodLabel() {
    return this.dateAdapter
      .format(
        this.calendar.activeDate,
        this.dateFormats.display.monthYearA11yLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(
      this.calendar.activeDate,
      -1
    );
  }

  nextClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(
      this.calendar.activeDate,
      1
    );
  }
}
