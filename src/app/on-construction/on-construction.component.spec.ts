import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnConstructionComponent } from './on-construction.component';

describe('OnConstructionComponent', () => {
  let component: OnConstructionComponent;
  let fixture: ComponentFixture<OnConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
