import { ApiService } from './../api.service';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListService } from '../list.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private apiLoaded = false;


  @Input() infoIn:any;
   imagen!:string;


  constructor( private serviceList: ListService, private apiS:ApiService) { }

  ngOnInit(): void {
  }

  addNew(){
    this.serviceList.activador.emit({data:this.infoIn})
  }

}
