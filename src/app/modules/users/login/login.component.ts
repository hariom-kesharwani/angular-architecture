import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
    this.login()
  }

  login(){
    
    let username='test';
    let password='test';
    //Calling Event list service to fetch records from api
    this.AuthenticationService.login(username,password).subscribe((res) => {
      console.log(res);
      //Logic to use API data
    });
  }

}
