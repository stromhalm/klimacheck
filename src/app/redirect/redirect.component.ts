import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  template: ''
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.params['question']) {
      this.router.navigate(['/thema', this.route.snapshot.params['topic'], 'frage', this.route.snapshot.params['question']]);
    } else {
      this.router.navigate(['/thema', this.route.snapshot.params['topic'], 'auswertung']);
    }
  }
}
