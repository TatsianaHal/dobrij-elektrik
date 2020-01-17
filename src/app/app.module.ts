import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';
import { MainComponent } from './main/main.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// config from Firebase:
const config = {
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
  declarations: [AppComponent, MainComponent],
  imports: [
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PerfectScrollbarModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(config)
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
