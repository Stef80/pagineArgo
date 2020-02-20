import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRigheDiCalcoloComponent } from './tab-righe-di-calcolo.component';

describe('TabRigheDiCalcoloComponent', () => {
  let component: TabRigheDiCalcoloComponent;
  let fixture: ComponentFixture<TabRigheDiCalcoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRigheDiCalcoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRigheDiCalcoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
