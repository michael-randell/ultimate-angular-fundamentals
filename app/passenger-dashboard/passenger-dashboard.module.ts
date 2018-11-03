import { NgModule } from  '@angular/core';
import { CommonModule } from '@angular/common'

// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

// components
import { PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

// services
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    //  components
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}