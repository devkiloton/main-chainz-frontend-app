import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BitcoinApiClientService } from './bitcoin-api-client.service';

describe('BitcoinApiClientService', () => {
  let service: BitcoinApiClientService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinApiClientService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BitcoinApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
