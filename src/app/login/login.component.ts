import { Component, OnInit } from '@angular/core';
import {Login} from '../Login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginmodel: Login;
  isLogin=false;
  users: Login[]=[];
  public User="";
  Route='';
  
  constructor() {
    this.users.push(new Login('Admin','7996'));
    this.users.push(new Login('Akshay','1234'));
    this.users.push(new Login('Balaji','3456'));
    this.users.push(new Login('Sethu','2345'));
    this.users.push(new Login('Chris','7226'));
    this.users.push(new Login('Abinav','1996'));
   }


  ngOnInit() {
    this.loginmodel=new Login;
    localStorage.setItem( 'Users',JSON.stringify(this.users));
  }
   
onSubmit()
{
  var match:number;

  for(var i=0;i<this.users.length;i++){
    if(this.users[i].Username==this.loginmodel.Username)
    {
     match=i;
     console.log('match');
    }
  }
   if(this.users[match].Password==this.loginmodel.Password)
   {
     this.isLogin=true;
     console.log('match');
     this.User=this.users[match].Username;
     localStorage.setItem('User',this.User);
     var urlstr= '/'+this.User;
     window.location.replace(urlstr);
     }

}


}


