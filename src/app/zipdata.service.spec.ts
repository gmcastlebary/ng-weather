import { TestBed, inject } from '@angular/core/testing';

import { ZipdataService } from './zipdata.service';

describe('ZipdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipdataService]
    });
  });

  it('should be created', inject([ZipdataService], (service: ZipdataService) => {
    expect(service).toBeTruthy();
  }));
});
