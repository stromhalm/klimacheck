import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';

@Component({
  templateUrl: './question.component.html',
  selector: 'app-question',
  styleUrls: ['./question.component.less'],
  animations: [
    trigger('animation', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.9)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-in', style({
          transform: 'translateX(-100%) rotate(-3deg)'
        }))
      ])
    ])
  ]
})
export class QuestionComponent implements OnInit {

  @HostBinding('@animation') get animation() { return; }

  topicId: number;
  questionId: number;
  topic: Object;
  question: Object;
  answer: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private checkStorageService: CheckStorageService
  ) {}

  ngOnInit() {
    this.topicId = parseInt(this.route.parent.snapshot.params['topic'], 10);
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

  clickPrevious() {
    this.router.navigate(['animate', 'frage', this.questionId-1], { relativeTo: this.route.parent });
  }

  clickNext() {
    this.router.navigate(['animate', 'frage', this.questionId+1], { relativeTo: this.route.parent });
  }

  clickScore() {
    this.router.navigate(['animate', 'auswertung'], { relativeTo: this.route.parent });
  }
}
