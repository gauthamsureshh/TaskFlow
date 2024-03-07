import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkauthGuard } from './checkauth.guard';

describe('checkauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
