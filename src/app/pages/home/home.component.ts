import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuOptions;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuOptions()
    .subscribe((data) => {
      this.menuOptions = data["initialMenu"];
    })
  }

}
