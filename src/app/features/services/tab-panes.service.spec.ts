import { TestBed } from '@angular/core/testing';

import { TabPanesService } from './tab-panes.service';

describe('TabPanesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabPanesService = TestBed.get(TabPanesService);
    expect(service).toBeTruthy();
  });
});
