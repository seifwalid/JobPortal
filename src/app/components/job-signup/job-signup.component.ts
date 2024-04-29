
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/sessionService/session.service';
import { UserType } from '../../models/userType';
@Component({
  selector: 'app-job-signup',
  templateUrl: './job-signup.component.html',
  styleUrl: './job-signup.component.css',
})
export class JobSignupComponent implements OnInit{
  UserType:UserType={type:'none'};
  email = '';
  role='';
  firstName = '';
  lastName = '';
  password = '';
  companyPhone = '';
  companyAddress = '';
  confirmPassword = '';
  companyPassword='';
  companyName='';
  companyEmail=''
  constructor(private router: Router, private sessionService: SessionService) {
    console.log('JobSignupComponent created');
  }

  ngOnInit() {
    const jobRole = this.sessionService.get('jobRole');
    this.UserType.type = jobRole !== null ? jobRole : 'default';
    console.log(this.UserType.type);
  }


  isUserCompany(){
    if(this.UserType.type==='company'){
      return true;
    }
    else return false;
  }


  signupCompany() {
    console.log('Email:', this.companyAddress);
    console.log('Password:', this.companyEmail);
    console.log('Confirm Password:', this.companyPassword);
    console.log('Role:', this.role);
  }
}
