import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addAggregator=()=>{

    this.router.navigateByUrl('adminlogin/admin-dashboard/add-bus-aggregator');

  };
  viewAggregator=()=>{

    this.router.navigateByUrl('adminlogin/admin-dashboard/aggregator-details');

  }

}
