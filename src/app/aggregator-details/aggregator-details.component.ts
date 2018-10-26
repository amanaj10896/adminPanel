import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aggregator-details',
  templateUrl: './aggregator-details.component.html',
  styleUrls: ['./aggregator-details.component.css']
})
export class AggregatorDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  editAggregatorDetail=()=>{
    this.router.navigateByUrl('adminlogin/admin-dashboard/update-aggregator-data');

  };
  deleteAggregatorDetail=()=>{
    this.router.navigateByUrl('adminlogin/admin-dashboard');

  };
}
