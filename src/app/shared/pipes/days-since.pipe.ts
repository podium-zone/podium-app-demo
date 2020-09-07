import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince',
})
export class DaysSincePipe implements PipeTransform {
  transform(date: Date): string {
    const milisecondsPerOneDay = 1000 * 60 * 24;
    const now = new Date();
    return Math.floor((now.getTime() - date.getTime()) / milisecondsPerOneDay) + ' days ago';
  }
}
