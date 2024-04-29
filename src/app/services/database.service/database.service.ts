import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../../models/userModel';
import { SessionService } from '../sessionService/session.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase,
    private sessionService: SessionService
  ) { }

 async addUser() {  
  const us={
    userId:1,
    email: "user.email",
    firstName: "seif",
    lastName: "walid"
  }
  await this.db.object(`user/${us.userId}`).set(us);
 
}

}
