import { TestBed } from '@angular/core/testing';

import { TabDocPanesService } from './tab-doc-panes.service';

describe('TabDocPanesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabDocPanesService = TestBed.get(TabDocPanesService);
    expect(service).toBeTruthy();
  });
});
