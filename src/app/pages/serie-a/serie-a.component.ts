import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'serie-a',
  templateUrl: './serie-a.component.html',
  styleUrls: ['./serie-a.component.scss']
})
export class SerieAComponent implements OnInit {

  teams;
  selectedTeam;
  objective = "Escolha o time que você deseja para ver as expectativas da diretoria";

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeamsBySerie("A");
  }

  onSelect = (team) => {
    this.selectedTeam = team;
    this.setObjective();
  }

  setObjective = () => {
    let level = this.selectedTeam.level;
    let objectives = [
      "Escapar do rebaixamento",
      "Conseguir uma vaga na Copa Sul-Americana",
      "Conseguir uma vaga na Copa Libertadores da América",
      "Vencer o título da liga"
    ]

    if (level <= 3) {
      this.objective = objectives[0];
    }
    else if (level === 3.5 ) {
      this.objective = objectives[1];
    }
    else if (level === 4) {
      this.objective = objectives[2];
    }
    else if(level >= 4.5) {
      this.objective = objectives[3];
    }
  }

}
