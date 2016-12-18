import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  animations: [
    trigger('slideDown', [
      transition('void => *', [
        style({
          transform: 'translateY(-110%)'
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('* => void', [
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            transform: 'translateY(-110%)'
          })
        )
      ])
    ])
  ],
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {

  @HostBinding('@slideDown') get animation() { return 'Ts'; }

  constructor() { }

  ngOnInit() {
  }

}
