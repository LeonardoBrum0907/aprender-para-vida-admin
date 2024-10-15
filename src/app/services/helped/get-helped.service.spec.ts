import { TestBed } from '@angular/core/testing';

import { GetHelpedService } from './get-helped.service';

describe('GetHelpedService', () => {
  let service: GetHelpedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHelpedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
