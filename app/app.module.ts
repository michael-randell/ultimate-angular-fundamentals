import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from "@angular/common";
import { HttpModule } from "@angular/http";

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
