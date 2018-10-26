import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-aggregator-data',
  templateUrl: './update-aggregator-data.component.html',
  styleUrls: ['./update-aggregator-data.component.css']
})
export class UpdateAggregatorDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  updateAggregatorDetail=()=>{
    this.router.navigateByUrl('adminlogin/admin-dashboard');

  }
}
