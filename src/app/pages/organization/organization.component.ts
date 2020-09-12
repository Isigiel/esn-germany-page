import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationComponent {
  constructor() {}
}
