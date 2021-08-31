import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss']
})
export class TeamSelectorComponent implements OnInit {

  @Input() groupByState: boolean;
  @Input() expanded: boolean;
  @Input() teamsList: Array<any>;
  @Output() selectedTeam = new EventEmitter<number>();

  teams;
  states;
  activeState;
  openTeam;

  constructor(private teamsService: TeamsService, private ngZone: NgZone) { }

  ngOnInit(): void {
    if(this.teamsList) {
      this.teams = this.teamsList;
    }
    else {
      this.teamsService.getStates()
      .subscribe((data) => {
        this.states = data;
        this.activeState = 0;
        this.getTeams(this.states[this.activeState].id);
      })
    }
  }

  previousState = () => {
    this.openTeam = null;
    this.selectedTeam.emit(undefined);
    if(this.activeState === 0) {
      this.activeState = 26;
    }
    else {
      this.activeState --;
    }
    this.getTeams(this.states[this.activeState].id);
  }

  nextState = () => {
    this.openTeam = null;
    this.selectedTeam.emit(undefined);
    if(this.activeState === 26) {
      this.activeState = 0;
    }
    else {
      this.activeState ++;
    }
    this.getTeams(this.states[this.activeState].id);
  }

  getTeams = async (stateId) => {
    this.teams = await this.teamsService.getTeamsByState(stateId);
  }
  
  selectTeam = (teamIndex) => {
    this.openTeam = teamIndex;
    this.selectedTeam.emit(this.teams[teamIndex]);
  }


}
