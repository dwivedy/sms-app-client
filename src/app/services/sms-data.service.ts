import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsDataService {

  constructor(private httpClient:HttpClient ) { }

  public getSMSData( ) {
    return this.httpClient.get<any>("http://localhost:9009/api/services/list",  {responseType: 'json' });
  }
}
