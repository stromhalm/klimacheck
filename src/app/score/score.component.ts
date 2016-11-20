import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClimateCheck } from '../climate-check';
import { CheckStorageService } from '../check-storage.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.less']
})
export class ScoreComponent implements OnInit {

  topicId: number;
  topic: Object;
  percentage: number;
  scoreText: String;

  constructor(private route: ActivatedRoute, private router: Router, private checkStorageService: CheckStorageService) {

    this.topicId = parseInt(this.route.snapshot.params['topic'], 10);

    // Only show when questions completed
    if (!checkStorageService.isTopicComplete(this.topicId)) {
      router.navigate(['/thema', this.topicId]);
    }

    this.topic = ClimateCheck.topics[this.topicId];
    this.percentage = checkStorageService.getTopicPercentage(this.topicId);
    this.scoreText = checkStorageService.getScoreText(this.topicId);
  }

  ngOnInit() {
  }
}
