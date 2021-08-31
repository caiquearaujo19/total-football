import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field-player',
  templateUrl: './field-player.component.html',
  styleUrls: ['./field-player.component.scss']
})
export class FieldPlayerComponent implements OnInit {

  @Input() player: any;
  @Input() captain: boolean;
  @Input() shirtColor: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
