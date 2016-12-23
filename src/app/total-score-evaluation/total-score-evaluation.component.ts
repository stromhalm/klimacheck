import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';

@Component({
  selector: 'app-total-score',
  templateUrl: './total-score-evaluation.component.html',
  styleUrls: ['./total-score-evaluation.component.less'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({
          transform: 'translateY(100%)'
        }),
        animate('500ms 337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition(':leave', [
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class TotalScoreEvaluationComponent implements OnInit {

  @HostBinding('@slideUp') get slideUp() { return ''; }

  constructor() { }

  ngOnInit() {
  }
}
