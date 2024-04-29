import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../services/authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-job-login',
  templateUrl: './job-login.component.html',
  styleUrl: './job-login.component.css'
})
export class JobLoginComponent implements OnInit {
  email='';
  password='';

  ngOnInit() {
    console.log('JobLoginComponent initialized');
  }
  constructor(private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    console.log('JobLoginComponent created');
  }

  async loginSeeker() {
    try {
      await this.authService.loginSeeker(this.email, this.password);
      this.snackBar.open('Login successful', 'Close', { duration: 3000 });
      this.router.navigate(['/home']);
    } catch (error) {
      this.snackBar.open('Invalid username or password', 'Close', {
        duration: 3000,
      });
    }
  }

  async loginCompany() {
    try {
      await this.authService.loginCompany(this.email, this.password);
      this.snackBar.open('Login successful', 'Close', { duration: 3000 });
      this.router.navigate(['/home']);
    } catch (error) {
      this.snackBar.open('Invalid username or password', 'Close', {
        duration: 3000,
      });
    }
  }
}
