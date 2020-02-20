import { TestBed } from '@angular/core/testing';

import { TabItemsService } from './tab-items.service';

describe('TabItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabItemsService = TestBed.get(TabItemsService);
    expect(service).toBeTruthy();
  });
});
