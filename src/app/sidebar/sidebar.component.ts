import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   videos:any[]=[];

  constructor( private serviceList:ListService) { }

  ngOnInit(): void {

    this.serviceList.activador.subscribe(data => {
      this.videos.push(data);
      console.log(this.videos);
    })
  }

}
