import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'serie-c',
  templateUrl: './serie-c.component.html',
  styleUrls: ['./serie-c.component.scss']
})
export class SerieCComponent implements OnInit {

  teams;
  selectedTeam;
  objective = "Escolha o time que você deseja para ver as expectativas da diretoria";

  constructor(private teamsService: TeamsService) { }

  async ngOnInit() {
    this.teams = await this.teamsService.getTeamsBySerie("C");
  }

  onSelect = (team) => {
    this.selectedTeam = team;
    this.setObjective();
  }

  setObjective = () => {
    let level = this.selectedTeam.level;
    let objectives = [
      "Escapar do rebaixamento",
      "Terminar no meio da tabela",
      "Conseguir o acesso para a Série B",
      "Vencer o título da liga"
    ]

    if (level <= 1.5) {
      this.objective = objectives[0];
    }
    else if (level === 2 ) {
      this.objective = objectives[1];
    }
    else if (level === 2.5) {
      this.objective = objectives[2];
    }
    else if(level >= 3) {
      this.objective = objectives[3];
    }
  }

}
