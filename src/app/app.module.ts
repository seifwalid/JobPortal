import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobLoginComponent } from './components/job-login/job-login.component';
import { JobSignupComponent } from './components/job-signup/job-signup.component';
const firebaseConfig = {
  apiKey: "AIzaSyC5LWMqaR60d1whsjudJ7l_JHobKMSDArM",
  authDomain: "job-portal-9e35f.firebaseapp.com",
  projectId: "job-portal-9e35f",
  storageBucket: "job-portal-9e35f.appspot.com",
  messagingSenderId: "55306700071",
  appId: "1:55306700071:web:5a3dd6f481c670c3be1502",
  measurementId: "G-DM4YNWZQFC"
};
@NgModule({
  declarations: [
    AppComponent,
    JobLoginComponent,
    JobSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
