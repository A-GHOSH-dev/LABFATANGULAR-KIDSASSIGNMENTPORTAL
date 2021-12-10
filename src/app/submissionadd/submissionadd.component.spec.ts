import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionaddComponent } from './submissionadd.component';

describe('SubmissionaddComponent', () => {
  let component: SubmissionaddComponent;
  let fixture: ComponentFixture<SubmissionaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
