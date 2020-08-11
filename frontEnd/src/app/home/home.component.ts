import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  string: string;

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
    this.controller.getUserData().subscribe(
      (
        data =>
        {
          this.string = JSON.stringify(data.body);
          
        })
    )
  }

}
