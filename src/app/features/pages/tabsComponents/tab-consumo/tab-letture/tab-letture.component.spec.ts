import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLettureComponent } from './tab-letture.component';

describe('TabLettureComponent', () => {
  let component: TabLettureComponent;
  let fixture: ComponentFixture<TabLettureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLettureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLettureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
