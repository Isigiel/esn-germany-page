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
  private ratio = {
    '1x1': '3by2',
    '2x2': '3by2',
    '1x2': '3by4',
    '2x1': '3by1',
  };
  private query = {
    '1x1': '?w=900&h=600&fm=jpg&q=80&fit=fill',
    '2x2': '?w=1800&h=1200&fm=jpg&q=80&fit=fill',
    '1x2': '?w=900&h=1200&fm=jpg&q=80&fit=fill',
    '2x1': '?w=1800&h=600&fm=jpg&q=80&fit=fill',
  };
  public events: any[];
  private pictures: any[];
  public imageGrid: any[];
  public currentUrl$: Observable<string>;
  public currentText$: Observable<string>;
  public currentInfo$: Observable<string>;
  constructor(private route: ActivatedRoute) {
    this.events = this.route.snapshot.data.events;
    this.pictures = this.route.snapshot.data.pictures;
    this.imageGrid = this.route.snapshot.data.imageGrid.map((entry) => ({
      ...entry.fields,
      ratio: this.ratio[entry.fields.size],
      query: this.query[entry.fields.size],
    }));
    console.log(this.imageGrid);
    const pictureChange = timer(0, 10000).pipe(share());
    this.currentUrl$ = pictureChange.pipe(
      map(
        (time) =>
          this.pictures[time % this.pictures.length].fields.image.fields.file
            .url
      ),
      map((url) => `url("${url}")`)
    );
    this.currentText$ = pictureChange.pipe(
      map((time) => this.pictures[time % this.pictures.length].fields.name)
    );
    this.currentInfo$ = pictureChange.pipe(
      map(
        (time) => this.pictures[time % this.pictures.length].fields.description
      )
    );
  }
}
