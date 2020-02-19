import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDocumentoComponent } from './tab-documento.component';

describe('TabDocumentoComponent', () => {
  let component: TabDocumentoComponent;
  let fixture: ComponentFixture<TabDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
