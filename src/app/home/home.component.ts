import { Component, OnInit, trigger, style, transition, animate, } from '@angular/core';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('expandY', [
      transition('void => *', [
        style({
          transform: 'scaleY(0)'
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    trigger('slideDown', [
      transition('void => *', [
        style({
          transform: 'translateY(-110%)'
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => void', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            transform: 'translateY(-110%)'
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
    ]),
    trigger('cascadeUp', [
      transition('void => 1', [
        style({
          transform: 'translateY(80%)',
          opacity: 0
        }),
        animate('337ms .05s cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('void => 2', [
        style({
          transform: 'translateY(80%)',
          opacity: 0
        }),
        animate('337ms .1s cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('void => 3', [
        style({
          transform: 'translateY(80%)',
          opacity: 0
        }),
        animate('337ms .15s cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  topics = ClimateCheck.topics;

  constructor(
    private router: Router,
    private checkStorageService: CheckStorageService
  ) {}

  ngOnInit() {
  }

  startTopic(topicIndex) {
    this.router.navigate(['/thema', topicIndex]);
  }
}
