import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-position',
  templateUrl: './player-position.component.html',
  styleUrls: ['./player-position.component.scss']
})
export class PlayerPositionComponent implements OnInit {

  @Input() position: string;

  constructor() { }

  ngOnInit(): void {
  }

}
