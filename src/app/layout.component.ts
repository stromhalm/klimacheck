import { Component } from '@angular/core';
import { ClimateCheck } from './climate-check';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  topics = ClimateCheck.topics;
}
