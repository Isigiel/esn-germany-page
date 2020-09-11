import { TestBed } from '@angular/core/testing';

import { PicturesResolver } from './pictures.resolver';

describe('PicturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicturesResolver = TestBed.get(PicturesResolver);
    expect(service).toBeTruthy();
  });
});
