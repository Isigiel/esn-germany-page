import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { createClient, EntryCollection } from 'contentful';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() {}

  public getEvents(): Observable<any[]> {
    return fromPromise(
      this.cdaClient.getEntries({
        order: 'fields.start',
        content_type: environment.contentful.contentTypeIds.event,
      })
    ).pipe(
      map(
        (res) =>
          (this.cdaClient.parseEntries(res) as unknown) as EntryCollection<any>
      ),
      map((entries) => entries.items)
    );
  }

  public getLandingImages(): Observable<any[]> {
    return fromPromise(
      this.cdaClient.getEntries({
        content_type: environment.contentful.contentTypeIds.landingImage,
      })
    ).pipe(
      map(
        (res) =>
          (this.cdaClient.parseEntries(res) as unknown) as EntryCollection<any>
      ),
      map((entries) => entries.items)
    );
  }

  public getPictures(): Observable<any[]> {
    return fromPromise(
      this.cdaClient.getEntries({
        content_type: environment.contentful.contentTypeIds.headerPicture,
      })
    ).pipe(
      map(
        (res) =>
          (this.cdaClient.parseEntries(res) as unknown) as EntryCollection<any>
      ),
      map((entries) => entries.items)
    );
  }
}
