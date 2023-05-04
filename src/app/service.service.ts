import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getEntitlementDetails() {
    throw new Error('Method not implemented.');
  }
  BaseUrl: any;
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  baseUrl01 = environment.baseUrl01;

  // For get Employee Name
  getEmployeeInfo(){
    let requestedData = {
      "Nicuid":2
  }
    return this.http.post<any>(`${this.baseUrl01}`+"Employee/getEmployeeInfo", requestedData);
  }

  // For Pending Request
  pendingRequest(){
    return this.http.post<any>(`${this.baseUrl01}`+"Employee/pendingRequest", {});
  }

  // For DuePayment
  duePayment(){
    return this.http.post<any>(`${this.baseUrl01}`+"Employee/duePayment", {});
  }
  // For ExpectedSalary
  expectedSalary(){
    return this.http.post<any>(`${this.baseUrl01}`+"Employee/expectedSalary", {});
  }
  // For Upcoming Event
  upcomingEvent(){
    return this.http.post<any>(`${this.baseUrl01}`+"Employee/upcomingEvent", {});
  }
}
