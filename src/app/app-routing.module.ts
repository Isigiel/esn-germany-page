import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages';
import { EventsResolver } from './services/resolver/events.resolver';
import { PicturesResolver } from './services/resolver/pictures.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    resolve: {
      events: EventsResolver,
      pictures: PicturesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
