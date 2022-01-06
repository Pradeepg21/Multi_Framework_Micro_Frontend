import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router){}
  allApps: any = ["angular1", "angular2", "react1", "react2", "angular1"];
  allApps2: any = ["react1", "angular1","react2", "angular2",  "angular1"];

  ngOnInit(): void {
  }

  buttonClick(ulink) {
    this.router.navigate([ulink]);
  }
}
