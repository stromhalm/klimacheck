import { Component, OnInit, trigger, style, transition, animate, HostBinding } from '@angular/core';
import { CheckStorageService } from '../check-storage.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({
          transform: 'translateY(-110%)'
        }),
        animate('337ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition(':leave', [
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

  menuButton: String;

  @HostBinding('@slideDown') get animation() { return 'Ts'; }

  constructor(private storage: CheckStorageService) { }

  ngOnInit() {
  }

  resetStorage() {
    this.storage.reset();
  }

}
