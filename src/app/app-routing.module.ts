import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import { UserComponent } from './user/user.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component'
import { OrdersComponent } from './orders/orders.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
const routes: Routes = [
  {
  path: '',
  component: LoginComponent
  },
{
  path:'Akshay'||'Sethu'||'Abinav'||'Chris'||'Balaji',
  component: UserComponent,
  children:[
    {path:'',
    component:DashboardComponent,
    },
    {path:'orders',
    component:OrdersComponent
    },
    {
      path:'restaurants',
      component:RestaurantComponent
    }
    ]

}
] 
  
     
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
