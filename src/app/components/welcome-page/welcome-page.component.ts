
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/sessionService/session.service';
import { DatabaseService } from '../../services/database.service/database.service';
@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  private router = inject(Router);
  private sessionService = inject(SessionService);
  private databaseService = inject(DatabaseService);  
  
  seekerSignUp(){
    this.sessionService.save('jobRole', 'seeker');
    console.log(this.sessionService.get('jobRole'))
    this.router.navigate(['/login']);
  }
  companySignUp(){
    this.sessionService.save('jobRole', 'company');
    console.log(this.sessionService.get('jobRole'))
    
    this.router.navigate(['/login']);
   
  }

  testUser (){
    this.databaseService.addUser();
  }
}
