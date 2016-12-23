import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
  animations: [
    trigger('cascadeUp', [
      transition('void => 1', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('337ms .05s cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('void => 2', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('337ms .1s cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('void => 3', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('337ms .15s cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('void => *', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    trigger('slideDown', [
      transition('* => void', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            transform: 'translateY(50%)',
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class CategoriesComponent implements OnInit {

    @HostBinding('@slideDown') get animation() { return; }

    topics = ClimateCheck.topics;

    constructor(
      private router: Router,
      private checkStorageService: CheckStorageService
    ) {}

    ngOnInit() { }

    startTopic(topicIndex) {
      this.router.navigate(['/thema', topicIndex]);
    }
}
