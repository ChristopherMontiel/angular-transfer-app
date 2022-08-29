import { TestBed } from '@angular/core/testing';

import { NewTransferService } from './new-transfer.service';

describe('NewTransferService', () => {
  let service: NewTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
