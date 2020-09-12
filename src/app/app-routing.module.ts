import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent, OrganizationComponent } from './pages';
import { EventsResolver } from './services/resolver/events.resolver';
import { PicturesResolver } from './services/resolver/pictures.resolver';
import { ImageGridResolver } from './services/resolver/image-grid.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    resolve: {
      events: EventsResolver,
      pictures: PicturesResolver,
      imageGrid: ImageGridResolver,
    },
  },
  {
    path: 'organization',
    component: OrganizationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
