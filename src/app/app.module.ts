import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddBusAggregatorComponent } from './add-bus-aggregator/add-bus-aggregator.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateAggregatorDataComponent } from './update-aggregator-data/update-aggregator-data.component';
import { AggregatorDetailsComponent } from './aggregator-details/aggregator-details.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddBusAggregatorComponent,
    AdminDashboardComponent,
    UpdateAggregatorDataComponent,
    AggregatorDetailsComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'admin-header',
        component:AdminHeaderComponent
      
            },
       
      {
        path: 'adminlogin/admin-dashboard/add-bus-aggregator',
        component:AddBusAggregatorComponent
      
            },

      {
      path: 'adminlogin/admin-dashboard/update-aggregator-data',
      component:UpdateAggregatorDataComponent
    
          },
      {
        path: 'adminlogin/admin-dashboard/aggregator-details',
        component:AggregatorDetailsComponent
      
            },
      {
        path: 'adminlogin/admin-dashboard',
        component:AdminDashboardComponent
      
            },
             {
        path: 'adminlogin',
        component:AdminLoginComponent
      
            },
      {
        path: '',
        component:AppComponent
      
            }
           
    ])
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
