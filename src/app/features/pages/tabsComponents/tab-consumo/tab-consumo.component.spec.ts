import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConsumoComponent } from './tab-consumo.component';

describe('TabConsumoComponent', () => {
  let component: TabConsumoComponent;
  let fixture: ComponentFixture<TabConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
