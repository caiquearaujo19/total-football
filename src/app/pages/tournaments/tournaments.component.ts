import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournamentsOptions;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenuOptions()
    .subscribe((data) => {
      this.tournamentsOptions = data["tournaments"];
    })
  }

}
