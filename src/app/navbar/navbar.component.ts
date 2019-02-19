import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  User=localStorage.getItem('User');
  Routelink='/'+this.User;
  constructor() { }

  ngOnInit() {
  }

}
