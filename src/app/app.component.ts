import { Component } from '@angular/core';
import { Sort } from '@angular/material';
import { SMSData } from './classes/smsData';
import { SmsDataService } from './services/sms-data.service';
import {FormGroup, FormControl} from '@angular/forms';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMS App Client';
  isShow: boolean = true;

  smsData:any;

  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  

  sortedData: any;

  constructor(private smsDataService:SmsDataService){


  }

   

  onClick(){
  this.smsData=this.smsData.filter(
    m => new Date(m.start_date) >= new Date(this.startDate.value) && new Date(m.end_date) <= new Date(this.endDate.value)
    );
   
if(this.smsData==null || this.smsData.length==0 ){
this.isShow=false;
}
  // let dateSortObj=[];

  //   this.smsData.forEach((obj) =>{
  //     let startDate = new Date(obj.start_date);
  //     let endDate = new Date(obj.end_date);
  //     if(startDate.getTime() >= this.startDate.value.getTime() && endDate.getTime() <= this.endDate.value.getTime())   {
  //       dateSortObj.push(obj);
  //   }
       
  //   });

  //   this.smsData=dateSortObj;  
  // console.log(this.smsData.length)
  }
  ngOnInit(){
    this.getSMSData();
  }

  public getSMSData( ){
    let resp=this.smsDataService.getSMSData();
    resp.subscribe(data=>this.smsData=data);
   }


   sortData(sort: Sort) {
    
    if (!sort.active || sort.direction === '') {
      this.sortedData = this.smsData;
      return;
    }

    this.sortedData = this.smsData.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'city': return compare(a.city, b.city, isAsc);
        case 'start_date': return compare(a.start_date, b.start_date, isAsc);
        case 'end_date': return compare(a.end_date, b.end_date, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'color': return compare(a.color, b.color, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string| Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

  
}
