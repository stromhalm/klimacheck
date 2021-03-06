import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { CheckStorageService } from '../check-storage.service';
import { Router } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';

@Component({
  selector: 'app-total-score',
  templateUrl: './total-score-evaluation.component.html',
  styleUrls: ['./total-score-evaluation.component.less'],
  animations: [
    trigger('growUp', [
      transition('* => 0', [
        style({
          height: 0,
          transform: 'scaleY(0)'
        }),
        animate('337ms 1384ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => 1', [
        style({
          height: 0,
          transform: 'scaleY(0)'
        }),
        animate('337ms 1484ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => 2', [
        style({
          height: 0,
          transform: 'scaleY(0)'
        }),
        animate('337ms 1584ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => 3', [
        style({
          height: 0,
          transform: 'scaleY(0)'
        }),
        animate('337ms 1684ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => *', [
        style({
          height: 0,
          transform: 'scaleY(0)'
        }),
        animate('337ms 674ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({
          transform: 'translateY(100%)'
        }),
        animate('500ms 337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition(':leave', [
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class TotalScoreEvaluationComponent implements OnInit {

  @HostBinding('@slideUp') get slideUp() { return ''; }

  totalScoreText: string;
  totalScoreTitle: string;
  slidePercentage: string;
  totalPercentage: number;
  formattedScore: string;
  topics = ClimateCheck.topics;

  constructor(public checkStorageService: CheckStorageService, private mdPipe: MarkdownToHtmlPipe, private router: Router) {

    this.totalScoreTitle = checkStorageService.getTotalScoreTitle();
    this.totalScoreText = checkStorageService.getTotalScoreText();
    this.formattedScore = this.getFormattedText(this.totalScoreText);
  }

  getFormattedText(markdown: string): string {
    return this.mdPipe.transform(markdown)
    .replace('  ', '</p><p>')
    .replace('<a ', '<a target="_blank" ');
  }

  goToCategory(categoryId: number) {
    this.router.navigate(['/thema', categoryId]);
  }

  getAnswer(categoryId: number, questionId: number): boolean {
    return this.checkStorageService.getAnswer(categoryId, questionId);
  }

  getAnswerText(categoryId: number, questionId: number): string {
    if (this.getAnswer(categoryId, questionId)) {
      return this.topics[categoryId].questions[questionId]['true'];
    } else {
      return this.topics[categoryId].questions[questionId]['false'];
    }
  }

  ngOnInit() {
    setTimeout(() => this.totalPercentage = this.checkStorageService.getTotalPercentage(), 674);
  }
}
