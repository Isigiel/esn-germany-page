import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  private typecolors = {
    Local: 'pink',
    National: 'green',
    International: 'blue',
  };
  @Input()
  get events(): any[] {
    return this._events;
  }
  set events(events: any[]) {
    this._events = events
      .map((item) => item.fields)
      .map((event) => ({
        ...event,
        year: format(new Date(event.start), 'y'),
        month: format(new Date(event.start), 'MMM'),
        dayNumber: format(new Date(event.start), 'd'),
        dayName: format(new Date(event.start), 'iii'),
        typeColor: this.typecolors[event.type],
        startDate: new Date(event.start),
      }));
    console.log(this._events);
  }
  private _events;
}
