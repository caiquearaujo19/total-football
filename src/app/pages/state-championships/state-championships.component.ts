import { Component, OnInit, ElementRef } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'state-championships',
  templateUrl: './state-championships.component.html',
  styleUrls: ['./state-championships.component.scss']
})
export class StateChampionshipsComponent implements OnInit {

  activePage: number;
  stateChampionshipsList;

  constructor(private menuService: MenuService, private elm: ElementRef) {
    this.activePage = 0;
  }

  ngOnInit(): void {
    this.menuService.getMenuOptions()
    .subscribe((data) => {
      this.stateChampionshipsList = data["stateChampionships"];
    })
  }

  previousPage = () => {
    this.activePage--;
  }

  nextPage = () => {
    this.activePage++;
  }

  setNumberOfPages = (n: number) => {
    return Array(n);
  }

}
