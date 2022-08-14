import { TestBed } from '@angular/core/testing';

import { ApiAndStorageService } from './api-and-storage.service';

describe('ApiAndStorageService', () => {
  let service: ApiAndStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAndStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
