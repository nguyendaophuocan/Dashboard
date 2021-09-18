import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private db: AngularFirestore) {}

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }
  updateUser(user: any) {
    console.log('user', user);
    return this.db.collection('users').doc(user.id).update(user);
  }
  deleteUser(id: string) {
    return this.db.collection('users').doc(id).delete();
  }
}
