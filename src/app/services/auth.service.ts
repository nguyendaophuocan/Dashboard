import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('adminDashboard', JSON.stringify(user));
        this.router.navigate(['']);
      }
    });
  }

  get isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('adminDashboard'));
    return user !== null ? true : false;
  }
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        alert('You have sucessfully logged in');
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  }
  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('Sign in result', result);
        localStorage.setItem('adminDashboard', JSON.stringify(result));
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  }
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('adminDashboard');
      this.router.navigate(['login']);
    });
  }
  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
      });
  }
  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((user) => user.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }
  forgotPassword(email: string) {
    return this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Email sent');
      })
      .catch((error) => console.log(error));
  }
}
