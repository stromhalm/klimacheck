import { Component, OnInit, trigger, state, style, transition, keyframes, animate} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';

@Component({
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less'],
  animations: [
    trigger('questionId', [
      state('*', style({height: '*'})),
      transition('* <=> *', [
          animate('150ms ease-in-out', keyframes([
          style({transform: 'scale(1)', offset: 0}),
          style({transform: 'scale(0.95)',  offset: 0.4}),
          style({transform: 'scale(1.01)',  offset: 0.95}),
          style({transform: 'scale(1)',     offset: 1})
        ]))
      ])
    ]),
    trigger('answer', [
      state('*', style({height: '*'})),
      transition('* <=> *', [
          animate('150ms ease-in-out', keyframes([
          style({transform: 'scale(1)', offset: 0}),
          style({transform: 'scale(0.95)',  offset: 0.4}),
          style({transform: 'scale(1.01)',  offset: 0.95}),
          style({transform: 'scale(1)',     offset: 1})
        ]))
      ])
    ])
  ]
})
export class QuestionComponent implements OnInit {

  topicId: number;
  questionId: number;
  topic: Object;
  question: Object;

  answer: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private checkStorageService: CheckStorageService) {

    // Subscribe to route changings
    this.router.events.subscribe((val) => {
      this.loadData();
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
      this.topicId = parseInt(this.route.snapshot.params['topic'], 10);
      this.questionId = parseInt(this.route.snapshot.params['question'], 10);

      this.topic = ClimateCheck.topics[this.topicId];
      this.question = ClimateCheck.topics[this.topicId].questions[this.questionId];

      try {
        this.answer = this.checkStorageService.getAnswer(this.topicId, this.questionId);
      } catch (e) {
        this.answer = undefined;
      }
  }

  clickYes() {
    this.answer = true;
    this.checkStorageService.setAnswer(this.topicId, this.questionId, true);
  }

  clickNo() {
    this.answer = false;
    this.checkStorageService.setAnswer(this.topicId, this.questionId, false);
  }

}
