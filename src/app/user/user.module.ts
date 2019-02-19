import { NgModule } from '@angular/core';

import { UserRoutingmodule } from  './user-routing.module';
import{UserComponent} from '../user/user.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent,

  ],
  imports: [
    AppModule,
    UserRoutingmodule,
    RouterModule
  ]
})
export class UserModule { }
