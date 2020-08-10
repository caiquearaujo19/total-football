import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playersURL = "../../../assets/data/players.json";

  constructor(private http: HttpClient) { }

  getPlayersByTeam = async (teamId) => {
    return await this.http.get<any>(this.playersURL).toPromise().then((data) => {
      return data.filter((player) => player.teamId.toString() === teamId.toString());
    });
  }
}
