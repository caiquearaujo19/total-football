import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  statesURL = "../../../assets/data/states.json";
  teamsURL = "../../../assets/data/teams.json";
  formationsURL = '../../../assets/data/formations.json';

  constructor(private http: HttpClient) { }

  private sortAlphabetically = (array:Array<any>) => {
    array.sort((a,b) => a.name.normalize("NFD") > b.name.normalize("NFD") ? 1 : a.name.normalize("NFD") < b.name.normalize("NFD") ? -1 : 0);
    return array;
  }

  getStates = () => {
    return this.http.get(this.statesURL);
  }

  getStateById = async (stateId) => {
    return await this.http.get<any>(this.statesURL).toPromise().then((data) => {
      const stateIndex = data.findIndex((state) => state.id.toString() === stateId.toString());
      return stateIndex !== -1 ? data[stateIndex] : {};
    })
  }

  getTeamsByState = async (stateId) => {
    return await this.http.get<any>(this.teamsURL).toPromise().then((data) => {
      return this.sortAlphabetically(data.filter((team) => team.stateId.toString() === stateId.toString()));
    });
  }

  getTeamsBySerie = async (serie) => {
    return await this.http.get<any>(this.teamsURL).toPromise().then((data) => {
      return this.sortAlphabetically(data.filter((team) => team.serie === serie));
    });
  }

  getTeamById = async (teamId) => {
    return await this.http.get<any>(this.teamsURL).toPromise().then((data) => {
      const teamIndex = data.findIndex((team) => team.id.toString() === teamId.toString());
      return teamIndex !== -1 ? data[teamIndex] : {};
    })
  }

  getFormations = () => {
    return this.http.get(this.formationsURL);
  }
}
