import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLogDocComponent } from './tab-log-doc.component';

describe('TabLogDocComponent', () => {
  let component: TabLogDocComponent;
  let fixture: ComponentFixture<TabLogDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLogDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLogDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
