import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'serie-d',
  templateUrl: './serie-d.component.html',
  styleUrls: ['./serie-d.component.scss']
})
export class SerieDComponent implements OnInit {

  teams;
  selectedTeam;
  objective = "Escolha o time que você deseja para ver as expectativas da diretoria";

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeamsBySerie("D");
  }

  onSelect = (team) => {
    this.selectedTeam = team;
    this.setObjective();
  }

  setObjective = () => {
    let level = this.selectedTeam.level;
    let objectives = [
      "Classificar-se para a Segunda fase",
      "Chegar as Oitavas de final",
      "Chegar as Quartas de final",
      "Conseguir o acesso para a Série C",
      "Vencer o título da liga"
    ]

    if (level <= 1) {
      this.objective = objectives[0];
    }
    else if (level === 1.5 ) {
      this.objective = objectives[1];
    }
    else if (level === 2) {
      this.objective = objectives[2];
    }
    else if(level === 2.5) {
      this.objective = objectives[3];
    }
    else if(level >= 3) {
      this.objective = objectives[4];
    }
  }

}
