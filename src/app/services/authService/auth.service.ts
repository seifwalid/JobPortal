import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SessionService } from '../sessionService/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private sessionService: SessionService) { }

  async registerSeeker(User: any): Promise<void> {
    const res = await this.auth.createUserWithEmailAndPassword(User.email, User.password);
    if (res.user) {
      this.sessionService.save('uid', res.user.uid);
      this.sessionService.save('jobRole', 'seeker');
    }
    window.location.href = '/login';
  }

  async registerRecruiter(company: any): Promise<void> {
    const res = await this.auth.createUserWithEmailAndPassword(company.email, company.password);

    if (res.user) {
      this.sessionService.save('uid', res.user.uid);
      this.sessionService.save('jobRole', 'company');
    }
    window.location.href = '/login';
  }
  async loginCompany(email: string, password: string): Promise<void> {
    const res = await this.auth.signInWithEmailAndPassword(email, password);
    if (res.user) {
      this.sessionService.save('uid', res.user.uid);
      this.sessionService.save('jobRole', 'company');
    }
    window.location.href = '/company';
  }

  async loginSeeker(email: string, password: string): Promise<void> {
    const res = await this.auth.signInWithEmailAndPassword(email, password);
    if (res.user) {
      this.sessionService.save('uid', res.user.uid);
      this.sessionService.save('jobRole', 'seeker');
    }
    window.location.href = '/seeker';
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
    this.sessionService.clear();
    window.location.href = '/login';
  }
}