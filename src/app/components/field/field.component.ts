import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() formation;
  @Input() players: Array<any>;
  @Input() captain: number;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
