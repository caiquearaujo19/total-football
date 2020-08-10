import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.scss']
})
export class PlayerListItemComponent implements OnInit {

  @Input() player: any;
  @Input() even: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
