import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCompetenzeFattureComponent } from './tab-competenze-fatture.component';

describe('TabCompetenzeFattureComponent', () => {
  let component: TabCompetenzeFattureComponent;
  let fixture: ComponentFixture<TabCompetenzeFattureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCompetenzeFattureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCompetenzeFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
