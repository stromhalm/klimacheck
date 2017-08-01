import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { CheckStorageService } from '../check-storage.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

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
    ]),
    trigger('turnIn', [
      transition(':enter', [
        style({
          transform: 'rotate(-45deg) scale(0)'
        }),
        animate('337ms 100ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ],
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {

  menuButton: String;
  link: String = 'logo';

  @HostBinding('@slideDown') get animation() { return 'Ts'; }

  constructor(private storage: CheckStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    if (this.router.url === '/') {
      this.link = 'logo';
    } else {
      this.link = 'back'
    }

    /*this.router.events.filter(event => event instanceof NavigationStart).subscribe(event => {
      if (this.route.children.length === 0) {
        this.link = 'logo';
      } else {
        this.link = 'back'
      }
      console.log(this.route);
    })*/
  }

  resetStorage() {
    this.storage.reset();
  }

}
