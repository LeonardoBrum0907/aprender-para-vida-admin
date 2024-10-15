import { TestBed } from '@angular/core/testing';

import { GetVolunteersService } from './get-volunteers.service';

describe('GetVolunteersService', () => {
  let service: GetVolunteersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVolunteersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
