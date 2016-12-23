import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-score-card',
  templateUrl: './total-score-card.component.html',
  styleUrls: ['./total-score-card.component.less'],
  animations: [
    trigger('slideUp', [
      transition(':leave', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            transform: 'translateY(100%)'
          })
        )
      ]),
      transition(':enter', [
        style({
          transform: 'translateY(100%)'
        }),
        animate('337ms 337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class TotalScoreCardComponent implements OnInit {

  @HostBinding('@slideUp') get animation() { return; }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTotalScore() {
    this.router.navigate(['/auswertung']);
  }
}