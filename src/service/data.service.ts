import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  setAggregatorValues=(busAggName,url,appId,appKey)=>{
  console.log(busAggName,url,appId,appKey);
  
  }

  constructor() { }
}
