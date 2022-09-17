import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor ( private apiS:ApiService){}


  public imagenes:any=[];



  public readData(){

    this.apiS.get('http://localhost:3000/crud/read')
    .subscribe(
      re => { this.imagenes = re; console.log(this.imagenes);}

    )
  }





  ngOnInit(): void {


    this.readData();
  }

}

