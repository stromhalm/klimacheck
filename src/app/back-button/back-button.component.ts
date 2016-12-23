import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.less'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({
          transform: 'scaleX(0)'
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
    ])
  ]
})
export class BackButtonComponent implements OnInit {

  @HostBinding('@animation') get animation() { return; }

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/']);
  }
}
