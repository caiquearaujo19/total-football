import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuOptionURL = "../../../assets/data/menuOptions.json";

  constructor(private http: HttpClient) { }

  getMenuOptions = () => {
    return this.http.get(this.menuOptionURL);
  }
}
