import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';
import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';

@Component({
  selector: 'app-answer-yes',
  templateUrl: './answer-yes.component.html',
  styleUrls: ['./answer-yes.component.less'],
  animations: [
    trigger('scale', [
      transition(':enter', [
        style({
          transform: 'scaleY(0)',
          opacity: 0,
          height: 0
        }),
        animate('337ms 337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition(':leave', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            transform: 'scaleY(0)',
            opacity: 0,
            height: 0
          })
        )
      ])
    ])
  ]
})
export class AnswerYesComponent implements OnInit {

  @HostBinding('@scale') get animation() { return; }

  topicId: number;
  questionId: number;
  topic: {
        menuName: string, fullName: string, icon: string, primaryColor: string, secondaryColor: string,
        scores: Array<{minPoints: string, text: string}>,
        questions: Array<{points: number, category: string, question: string, true: string, false: string}>
    };
  question: {points: number, category: string, question: string, true: string, false: string};
  formattedAnswer: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private checkStorageService: CheckStorageService,
    private mdPipe: MarkdownToHtmlPipe
  ) {}

  ngOnInit() {
    this.topicId = parseInt(this.route.parent.parent.snapshot.params['topic'], 10);
    this.questionId = parseInt(this.route.parent.snapshot.params['question'], 10);

    this.topic = ClimateCheck.topics[this.topicId];
    this.question = ClimateCheck.topics[this.topicId].questions[this.questionId];
    this.formattedAnswer = this.mdPipe.transform(this.question['true'])
    .replace('  ', '</p><p>')
    .replace('<a ', '<a target="_blank" ');
  }
}
