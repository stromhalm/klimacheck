import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('out', [
      transition('* => void', [
        animate('337ms')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  // No actual animation, but stay 337ms for sub components animations
  @HostBinding('@out') get animation() { return; }

  constructor( ) {}

  ngOnInit() { }
}
