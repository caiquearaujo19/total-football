import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  statesURL = "../../../assets/data/states.json";
  teamsURL = "../../../assets/data/teams.json";

  constructor(private http: HttpClient) { }

  private sortAlphabetically = (array:Array<any>) => {
    array.sort((a,b) => a.name.normalize("NFD") > b.name.normalize("NFD") ? 1 : a.name.normalize("NFD") < b.name.normalize("NFD") ? -1 : 0);
    return array;
  }

  getStates = () => {
    return this.http.get(this.statesURL);
  }

  getTeamsByState = (stateId) => {
    
    let result = [];
    this.http.get<any>(this.teamsURL).subscribe((data) => {
      data.map(team => {
        if(team.stateId === stateId) {
          result.push(team);
        }
      });
      result = this.sortAlphabetically(result);
    });
    return result;
  }

  getTeamsBySerie = (serie) => {
    let result = [];
    this.http.get<any>(this.teamsURL).subscribe((data) => {
      data.map(team => {
        if(team.serie === serie) {
          result.push(team);
        }
      });
      result = this.sortAlphabetically(result);
    });
    return result;
  }
}
