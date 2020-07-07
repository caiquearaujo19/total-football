import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kick-off',
  templateUrl: './kick-off.component.html',
  styleUrls: ['./kick-off.component.scss']
})
export class KickOffComponent implements OnInit {

  selectedHomeTeam;
  selectedAwayTeam;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectHome = (teamIndex) => {
    this.selectedHomeTeam = teamIndex;
  }

  onSelectAway = (teamIndex) => {
    this.selectedAwayTeam = teamIndex;
  }

}
