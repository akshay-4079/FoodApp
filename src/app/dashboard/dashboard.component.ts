import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {Restaurant} from '../Restaurants'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
User=localStorage.getItem('User');
Routelink='/'+this.User;
Restaurants:Restaurant[]=[];
  constructor() { }
   
  ngOnInit() {
    var list = JSON.parse(localStorage.getItem('Restaurant'));
    var menus= JSON.parse(localStorage.getItem('Menu'));
    this.Restaurants=list;
  }
  OnClick(a)
  {
    localStorage.setItem('Selected',a);
  
  }

}
