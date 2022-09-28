import { DataItem } from './../data.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {



  constructor( private apiS:ApiService ) { }




  ngOnInit(): void {

    this.readData();
  }

  public readData(){

    this.apiS.get('http://localhost:3000/crud/read')
    .subscribe((data:any) => {

    this.data = data
    
  })
    
  }
  data: DataItem[] = [];

  

}
