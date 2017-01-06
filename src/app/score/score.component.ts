import { Component, OnInit, trigger, style, transition, animate, HostBinding, state } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.less'],
  animations: [
    trigger('slideUp', [
      transition('* => *', [
        style({
          height: 0,
          transform: 'translateY(0)'
        }),
        animate('337ms 674ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class ScoreComponent implements OnInit {

  topicId: number;
  topic: Object;
  percentage: number = 0;
  scoreText: string;
  formattedAnswer: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private checkStorageService: CheckStorageService,
    private mdPipe: MarkdownToHtmlPipe
  ) {

    this.topicId = parseInt(this.route.parent.snapshot.params['topic'], 10);

    // Only show when questions completed
    if (!checkStorageService.isTopicComplete(this.topicId)) {
      router.navigate(['/thema', this.topicId]);
    }

    this.topic = ClimateCheck.topics[this.topicId];
    this.scoreText = checkStorageService.getScoreText(this.topicId);

    this.formattedAnswer = this.mdPipe.transform(this.scoreText)
    .replace('  ', '</p><p>')
    .replace('<a ', '<a target="_blank" ');
  }

  ngOnInit() {
     setTimeout(() => this.percentage = this.checkStorageService.getTopicPercentage(this.topicId), 337);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
