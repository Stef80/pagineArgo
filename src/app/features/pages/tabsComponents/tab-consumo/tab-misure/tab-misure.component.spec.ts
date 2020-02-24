import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMisureComponent } from './tab-misure.component';

describe('TabMisureComponent', () => {
  let component: TabMisureComponent;
  let fixture: ComponentFixture<TabMisureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMisureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
