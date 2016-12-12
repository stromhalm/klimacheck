import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {

  topicId: number;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.topicId = parseInt(this.route.snapshot.params['topic'], 10);
  }
}
