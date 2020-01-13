import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBFtEOME_-H-4WLoyvA7y3YARyr6e4sXEY',
  authDomain: 'dobrij-elektrik-62cae.firebaseapp.com',
  databaseURL: 'https://dobrij-elektrik-62cae.firebaseio.com',
  projectId: 'dobrij-elektrik-62cae',
  storageBucket: 'dobrij-elektrik-62cae.appspot.com',
  messagingSenderId: '1036600346597',
  appId: '1:1036600346597:web:64fb8f76974187235c910c',
  measurementId: 'G-5NP55EWSER'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
