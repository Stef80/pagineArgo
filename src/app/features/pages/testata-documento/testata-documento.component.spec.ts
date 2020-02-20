import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestataDocumentoComponent } from './testata-documento.component';

describe('TestataDocumentoComponent', () => {
  let component: TestataDocumentoComponent;
  let fixture: ComponentFixture<TestataDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestataDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestataDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
