import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPagamentiComponent } from './tab-pagamenti.component';

describe('TabPagamentiComponent', () => {
  let component: TabPagamentiComponent;
  let fixture: ComponentFixture<TabPagamentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPagamentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPagamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
