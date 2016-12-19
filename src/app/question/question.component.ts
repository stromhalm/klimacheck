import { Component, OnInit, trigger, style, transition, animate, HostBinding, state } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './question.component.html',
  selector: 'app-question',
  styleUrls: ['./question.component.less'],
  animations: [
    trigger('slideIn', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.9)'
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => void', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)', style({
          transform: 'translateX(-100%) rotate(-3deg)'
        }))
      ])
    ]),
    trigger('centerButtons', [
      state('center', style({
        transform: 'translateY(40px)'
      })),
      transition('void => center', animate('0s')),
      transition('* => *', animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')),
    ])
  ]
})
export class QuestionComponent implements OnInit {

  @HostBinding('@slideIn') get slideIn() { return; }

  topicId: number;
  questionId: number;
  topic: Object;
  question: Object;
  answer: boolean;

  get centerButtons() {
    if (this.answer === undefined) return 'center';
    return 'border';
  }

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
      if (this.answer) {
        this.router.navigate(['yes'], { relativeTo: this.route, skipLocationChange: true  });
      } else {
        this.router.navigate(['no'], { relativeTo: this.route, skipLocationChange: true  });
      }
    } catch (e) {
      this.answer = undefined;
    }
  }

  clickYes() {
    this.answer = true;
    this.router.navigate(['yes'], { relativeTo: this.route, skipLocationChange: true  });
    this.checkStorageService.setAnswer(this.topicId, this.questionId, true);
  }

  clickNo() {
    this.answer = false;
    this.router.navigate(['no'], { relativeTo: this.route, skipLocationChange: true });
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
