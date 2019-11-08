import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesDetailsComponent } from './colleges-details.component';

describe('CollegesDetailsComponent', () => {
  let component: CollegesDetailsComponent;
  let fixture: ComponentFixture<CollegesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
