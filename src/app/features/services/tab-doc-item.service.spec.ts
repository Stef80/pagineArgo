import { TestBed } from '@angular/core/testing';

import { TabDocItemService } from './tab-doc-item.service';

describe('TabDocItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabDocItemService = TestBed.get(TabDocItemService);
    expect(service).toBeTruthy();
  });
});
