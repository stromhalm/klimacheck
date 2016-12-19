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
      this.router.navigate(['frage', this.route.snapshot.params['question']], {relativeTo: this.route.parent });
    } else {
      this.router.navigate(['auswertung'], { relativeTo: this.route.parent });
    }
  }
}
