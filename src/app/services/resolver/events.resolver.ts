import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';

@Injectable({
  providedIn: 'root',
})
export class EventsResolver implements Resolve<any> {
  constructor(private contentful: ContentfulService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.contentful.getEvents();
  }
}
