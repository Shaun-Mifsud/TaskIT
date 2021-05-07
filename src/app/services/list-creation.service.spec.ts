import { TestBed } from '@angular/core/testing';

import { ListCreationService } from './list-creation.service';

describe('ListCreationService', () => {
  let service: ListCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
