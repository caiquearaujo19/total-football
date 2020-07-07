import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  
  }

}
