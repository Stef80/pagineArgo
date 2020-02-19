import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaPageComponent } from './prova-page.component';

describe('ProvaPageComponent', () => {
  let component: ProvaPageComponent;
  let fixture: ComponentFixture<ProvaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
