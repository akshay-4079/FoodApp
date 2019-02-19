import { NgModule } from  '@angular/core';
import { Routes, RouterModule} from  '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component'
import {RestaurantComponent} from '../restaurant/restaurant.component';
import {OrdersComponent} from '../orders/orders.component';
import { UserComponent } from './user.component';
import { componentFactoryName } from '@angular/compiler';
const routes: Routes = [
    {
        path:'Akshay'||'Sethu'||'Abinav'||'Chris'||'Balaji',
        component: UserComponent,
        children:[
            {path:'',
            component:DashboardComponent,
            },
            {path:'orders',
            component:OrdersComponent
            }
            
        ]
    
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingmodule { }