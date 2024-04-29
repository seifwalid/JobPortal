import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLoginComponent } from './job-login.component';

describe('JobLoginComponent', () => {
  let component: JobLoginComponent;
  let fixture: ComponentFixture<JobLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
