import { TestBed } from '@angular/core/testing';

import { EventsResolver } from './events.resolver';

describe('EventsResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsResolver = TestBed.get(EventsResolver);
    expect(service).toBeTruthy();
  });
});
