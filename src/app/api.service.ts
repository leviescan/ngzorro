import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpc:HttpClient) { }

  public get(url:string){
    return this.httpc.get(url);
  }

  public post(url:string, body: any){
    return this.httpc.post(url, body);
  }
}
