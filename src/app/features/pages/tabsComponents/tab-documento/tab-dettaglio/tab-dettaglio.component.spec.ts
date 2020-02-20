import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDettaglioComponent } from './tab-dettaglio.component';

describe('TabDettaglioComponent', () => {
  let component: TabDettaglioComponent;
  let fixture: ComponentFixture<TabDettaglioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDettaglioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
