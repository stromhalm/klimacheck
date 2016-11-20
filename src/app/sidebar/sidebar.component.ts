import { Component, OnInit } from '@angular/core';
import { ClimateCheck } from '../climate-check';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  topics = ClimateCheck.topics;
  topicId: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.topicId = parseInt(this.route.snapshot.params['topic'], 10);
    console.log(this.router.routerState.root.queryParams);
  }
}
