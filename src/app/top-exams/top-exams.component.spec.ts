import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopExamsComponent } from './top-exams.component';

describe('TopExamsComponent', () => {
  let component: TopExamsComponent;
  let fixture: ComponentFixture<TopExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
