import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/service/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-bus-aggregator',
  templateUrl: './add-bus-aggregator.component.html',
  styleUrls: ['./add-bus-aggregator.component.css']
})
export class AddBusAggregatorComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit=()=>{
  var busAggName=(<HTMLInputElement>document.getElementById("busAggName")).value;
  var url=(<HTMLInputElement>document.getElementById("url")).value;
  var appId=(<HTMLInputElement>document.getElementById("appId")).value;
  var appKey=(<HTMLInputElement>document.getElementById("appKey")).value;
  
  new DataService().setAggregatorValues(busAggName,url,appId,appKey);
  this.router.navigateByUrl('adminlogin/admin-dashboard');

}

}
