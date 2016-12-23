import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';

@Component({
  selector: 'app-total-score',
  templateUrl: './total-score.component.html',
  styleUrls: ['./total-score.component.less'],
  animations: [
    trigger('outAnimation', [
      transition(':leave', [
        animate('674ms 337ms', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class TotalScoreComponent implements OnInit {

  // Just to make the child route animations visible
  @HostBinding('@outAnimation') get animation() { return; }

  constructor() { }

  ngOnInit() {
  }
}
