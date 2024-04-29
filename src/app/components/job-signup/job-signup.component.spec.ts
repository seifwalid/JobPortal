import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSignupComponent } from './job-signup.component';

describe('JobSignupComponent', () => {
  let component: JobSignupComponent;
  let fixture: ComponentFixture<JobSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
