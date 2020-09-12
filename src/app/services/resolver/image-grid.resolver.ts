import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageGridResolver implements Resolve<any> {
  constructor(private contentful: ContentfulService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.contentful.getLandingImages();
  }
}
