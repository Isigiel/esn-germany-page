import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public events: any[];
  private pictures: any[];
  public currentUrl$: Observable<string>;
  public currentText$: Observable<string>;
  public currentInfo$: Observable<string>;
  constructor(private route: ActivatedRoute) {
    this.events = this.route.snapshot.data.events;
    this.pictures = this.route.snapshot.data.pictures;
    const pictureChange = timer(0, 10000).pipe(share());
    this.currentUrl$ = pictureChange.pipe(
      map(
        (time) =>
          this.pictures[time % this.pictures.length].fields.image.fields.file
            .url
      ),
      map((url) => `url("${url}")`),
      tap(console.log)
    );
    this.currentText$ = pictureChange.pipe(
      map((time) => this.pictures[time % this.pictures.length].fields.name),
      tap(console.log)
    );
    this.currentInfo$ = pictureChange.pipe(
      map(
        (time) => this.pictures[time % this.pictures.length].fields.description
      ),
      tap(console.log)
    );
  }
}
