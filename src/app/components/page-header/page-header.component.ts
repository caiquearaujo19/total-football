import { Component, OnInit, Input } from '@angular/core';
import { translateEn } from '../../../assets/utils/translator.js';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() breadcrumb:Array<String>;

  constructor() { }

  ngOnInit(): void {
  }

  setRoute = (index) => {
    let route = '/';
    for(let i = 0; i <= index; i++) {
      if(i > 0) {
        route = route + '/' + translateEn[this.breadcrumb[i]];
      }
      else {
        route = route + translateEn[this.breadcrumb[i]];
      }
    }
    return route;
  }

}
