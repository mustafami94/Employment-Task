import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content/content.component';
import { ActiveInfoComponent } from './content/active-info/active-info.component';
import { LiveEventsComponent } from './content/live-events/live-events.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DevicesStatusComponent } from './content/devices-status/devices-status.component';
import { WeatherComponent } from './content/weather/weather.component';
import { PeopleHazardousZoneComponent } from './content/people-hazardous-zone/people-hazardous-zone.component';
import { LiveWorkersTrendComponent } from './content/live-workers-trend/live-workers-trend.component';
import { HeadcountComponent } from './content/headcount/headcount.component';
import { NgxWeatherModule } from 'ngx-weather';


@NgModule({
  declarations: [
    TopNavBarComponent,
    LayoutComponent,
    LeftNavBarComponent,
    FooterComponent,
    ContentComponent,
    ActiveInfoComponent,
    LiveEventsComponent,
    DevicesStatusComponent,
    WeatherComponent,
    PeopleHazardousZoneComponent,
    LiveWorkersTrendComponent,
    HeadcountComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgApexchartsModule,
    NgxWeatherModule.forRoot({
      apiKey: '27a3e0d755664030af2233152242505'
      }),
  ]
})
export class LayoutModule { }
