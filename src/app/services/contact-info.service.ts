import { Injectable } from '@angular/core';
import {
  AngularFireDatabase
  // FirebaseObjectObservable
} from 'angularfire2/database';

class Contact {
  name = 'dobrij-elektrik';
  phoneNumb = 321;
  text = 'description';
}

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  constructor(private db: AngularFireDatabase) {}

  createAd() {
    const adDefault = new Contact();
    const adKey = this.db.list('/customers').push(adDefault).key;
    return this.db.object('/customers/' + adKey);
  }

  updateAd(ad, data) {
    return ad.update(data);
  }
}
