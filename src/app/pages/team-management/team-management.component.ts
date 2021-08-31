import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { PlayersService } from 'src/app/services/players/players.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {

  teamId;
  team;
  state;
  players;
  startingPlayers;
  reservePlayers;
  formationsModalOpen = false;
  formations;
  formationActiveIndex;

  constructor(private teamsService: TeamsService, private playersService: PlayersService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get("teamId");
    this.team = await this.teamsService.getTeamById(this.teamId);
    this.state = await this.teamsService.getStateById(this.team.stateId);
    this.players = await this.playersService.getPlayersByTeam(this.teamId);
    this.setStartingPlayers();
    this.setReservePlayers();
    this.getFormations();
  }

  setStartingPlayers = () => {
    this.startingPlayers = [];
    this.team.startingPlayers.map(playerId =>  {
      console.log(playerId);
      this.players.map(player => {
        if(playerId === player.id) {
          this.startingPlayers.push(player);
        }
      })
    });
  }

  setReservePlayers = () => {
    this.reservePlayers = [];
    this.reservePlayers = this.players.filter(val => !this.startingPlayers.includes(val));
    let order = ["GOL", "ZAG", "LD", "LE", "VOL", "MD", "ME", "MEI", "PD", "PE", "SA", "ATA"];
    this.reservePlayers.sort((a, b) => order.indexOf(a.position) - order.indexOf(b.position));
  }

  toggleFormationsModal = () => {
    this.formationsModalOpen = !this.formationsModalOpen;
  }

  getFormations = () => {
    this.teamsService.getFormations().subscribe((data: Array<any>) => {
      this.formations = data;
      this.formationActiveIndex = data.findIndex((formation) => formation.name === this.team.formation);
    })
  }

  onChangeFormation = (index) => {
    this.formationActiveIndex = index;
  }

}
