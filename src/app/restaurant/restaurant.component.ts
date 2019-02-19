import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {Restaurant} from '../Restaurants'
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
 Items:Item[]=[];
  Menu:[];


  ngOnInit() {
    var menus= JSON.parse(localStorage.getItem('Menu'));
    var selec= localStorage.getItem('Selected');
    for(let  a=0;a<menus.length;a++)
    {
      if(menus[a].Restaurant==selec)
      {
        this.Items.push(menus[a]);
      }
    
    }

   
  }

}
