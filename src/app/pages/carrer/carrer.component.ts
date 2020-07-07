import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {

  carrerOptions;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenuOptions()
    .subscribe((data) => {
      this.carrerOptions = data["carrer"];
    })
  }


}
