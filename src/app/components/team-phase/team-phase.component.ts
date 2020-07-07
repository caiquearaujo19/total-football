import { Component, OnInit, Input } from '@angular/core';
import { translatePt } from '../../../assets/utils/translator.js';

@Component({
  selector: 'team-phase',
  templateUrl: './team-phase.component.html',
  styleUrls: ['./team-phase.component.scss']
})
export class TeamPhaseComponent implements OnInit {

  @Input() phase: string;
  @Input() align: boolean;

  displayPhase: string;

  constructor() { }

  ngOnInit(): void {
    this.displayPhase = translatePt[this.phase];
  }

}
