import { Component, OnInit } from '@angular/core';
declare let $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actMe(){

    $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  }

}
