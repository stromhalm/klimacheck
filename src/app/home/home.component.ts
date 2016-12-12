import { Component, OnInit } from '@angular/core';
import { ClimateCheck } from '../climate-check';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  topics = ClimateCheck.topics;

  constructor() { }

  ngOnInit() {
  }

}
