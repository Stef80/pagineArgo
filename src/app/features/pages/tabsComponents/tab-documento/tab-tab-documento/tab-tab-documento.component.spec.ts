import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTabDocumentoComponent } from './tab-tab-documento.component';

describe('TabTabDocumentoComponent', () => {
  let component: TabTabDocumentoComponent;
  let fixture: ComponentFixture<TabTabDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTabDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTabDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
