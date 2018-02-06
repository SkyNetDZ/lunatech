import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestComponent } from './request/request.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'request', component: RequestComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
