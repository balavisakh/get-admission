import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comedk2020Component } from './comedk2020.component';

describe('Comedk2020Component', () => {
  let component: Comedk2020Component;
  let fixture: ComponentFixture<Comedk2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comedk2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comedk2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
