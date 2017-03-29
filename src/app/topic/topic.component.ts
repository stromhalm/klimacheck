import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClimateCheck } from '../climate-check';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less'],
  animations: [
    trigger('inAnimation', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    trigger('outAnimation', [
      transition('* => void', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            opacity: 0,
          })
        )
      ])
    ])
  ]
})
export class TopicComponent implements OnInit {

  @HostBinding('@outAnimation') get animation() { return; }

  topicId: number;
  topic: {
        menuName: string, fullName: string, icon: string, primaryColor: string, secondaryColor: string,
        scores: Array<{minPoints: string, text: string}>,
        questions: Array<{points: number, category: string, question: string, true: string, false: string}>
    };

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.topicId = parseInt(this.route.snapshot.params['topic'], 10);
    this.topic = ClimateCheck.topics[this.topicId];
  }
}
