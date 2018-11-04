import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
