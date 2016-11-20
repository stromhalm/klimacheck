/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckStorageService } from './check-storage.service';

describe('Service: CheckStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckStorageService]
    });
  });

  it('should ...', inject([CheckStorageService], (service: CheckStorageService) => {
    expect(service).toBeTruthy();
  }));
});
