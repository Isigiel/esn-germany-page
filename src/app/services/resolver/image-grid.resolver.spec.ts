import { TestBed } from '@angular/core/testing';

import { ImageGridResolver } from './image-grid.resolver';

describe('ImageGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageGridResolver = TestBed.get(ImageGridResolver);
    expect(service).toBeTruthy();
  });
});
