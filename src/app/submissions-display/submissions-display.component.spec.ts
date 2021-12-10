import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsDisplayComponent } from './submissions-display.component';

describe('SubmissionsDisplayComponent', () => {
  let component: SubmissionsDisplayComponent;
  let fixture: ComponentFixture<SubmissionsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
