import { TestBed } from '@angular/core/testing';

import { AliservicesService } from './aliservices.service';

describe('AliservicesService', () => {
  let service: AliservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AliservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
