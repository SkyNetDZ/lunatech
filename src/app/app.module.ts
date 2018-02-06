import { firebaseConfig } from '../environments/firebase.config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { ReportComponent } from './report/report.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { CountryService } from './country.service';
import { ListComponent } from './list/list.component';



@NgModule({
  imports:      [ BrowserModule , CommonModule , AppRoutingModule , AngularFireModule.initializeApp(firebaseConfig)],
  declarations: [ AppComponent, RequestComponent, ReportComponent, ListComponent ],
  providers: [AngularFirestore , AngularFireDatabase , CountryService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
