import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations'
import { ActivatedRoute, Router } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';

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
        transform: 'translateY(40px)',
          opacity: 1
      })),
      state('border', style({
          opacity: 1
      })),
      transition('* => border', animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')),
      transition('* => center', animate('337ms cubic-bezier(0.4, 0, 0.2, 1)'))
    ])
  ]
})
export class QuestionComponent implements OnInit {

  @HostBinding('@slideIn') get slideIn() { return; }

  topicId: number;
  questionId: number;
  topic: Topic;
  question: Question;
  answer: boolean;
  topics: Topic[];

  get centerButtons() {
    if (this.answer === undefined) {
      return 'center';
    }
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

    this.topics = ClimateCheck.topics;
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
    this.router.navigate(['animate', 'frage', this.questionId - 1], { relativeTo: this.route.parent });
  }

  clickNext() {
    if (this.questionId < this.topic.questions.length - 1) {
      this.router.navigate(['animate', 'frage', this.questionId + 1], { relativeTo: this.route.parent });
    } else {
      // Next topic
      this.router.navigate(['animate', 'thema', this.topicId + 1], { relativeTo: this.route.parent });
    }
  }

  clickScore() {
    this.router.navigate(['animate', 'auswertung'], { relativeTo: this.route.parent });
  }
}
