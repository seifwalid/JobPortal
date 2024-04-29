import { company } from './../../models/companyModel';
import { User } from './../../models/userModel';

import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth'; 
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { SessionService } from '../sessionService/session.service'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth :AngularFireAuth ,
    private sessionService: SessionService) { 
   }

    async registerSeeker (User:any): Promise<void> { 
      let res =await this.auth.createUserWithEmailAndPassword(User.email, User.password); 
      if(res.user){
        this.sessionService.save('uid', res.user.uid); 
        this.sessionService.save('jobRole', 'seeker');
        const user = res.user;
      }
      window.location.href = '/login';

    }
  
    async registerRecruiter(company:any): Promise<void> {

        let res =await this.auth.createUserWithEmailAndPassword(company.email, company.password);

        if(res.user){
          this.sessionService.save('uid', res.user.uid);
          this.sessionService.save('jobRole', 'company');
          const user = res.user;
        }

        window.location.href = '/login';


    }
      async loginCompany(email:string, password:string): Promise<void> {
        let res = await this.auth.signInWithEmailAndPassword(email, password);
        if(res.user){
          this.sessionService.save('uid', res.user.uid);
          this.sessionService.save('jobRole', 'company');
          const user = res.user;
        }
        window.location.href = '/company';

      }

      async loginSeeker(email:string, password:string): Promise<void> {
        let res = await this.auth.signInWithEmailAndPassword(email, password);
        if(res.user){
          this.sessionService.save('uid', res.user.uid);
          this.sessionService.save('jobRole', 'seeker');
          const user = res.user;
        }
        window.location.href = '/seeker';

      }

      async logout(): Promise<void> { 
        await this.auth.signOut();
        this.sessionService.clear();
        window.location.href = '/login';
      }
  
  }