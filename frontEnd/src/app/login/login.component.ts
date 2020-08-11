import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseUrl = environment.baseUrl;
  
  constructor() { }

  ngOnInit() {
  }

  // location of autoconfigured spring oauth2 controller!
  requestAuth(){
    window.location.replace(this.baseUrl +'oauth2/authorization/github');
  }
}
