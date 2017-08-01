import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.less'],
  animations: [
    trigger('expandY', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.9)'
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => void', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            transform: 'translateX(-100%) rotate(-3deg)'
          })
        )
      ])
    ]),
    trigger('buttonScale', [
      transition('void => *', [
        style({
          transform: 'scale(0)'
        }),
        animate('337ms 337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
    ])
  ]
})
export class InfoCardComponent implements OnInit {

  @HostBinding('@expandY') get animation() { return; }

  constructor(private router: Router) { }

  ngOnInit() { }

  startQuiz() {
    this.router.navigate(['/thema']);
  }
}
