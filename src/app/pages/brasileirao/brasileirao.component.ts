import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'brasileirao',
  templateUrl: './brasileirao.component.html',
  styleUrls: ['./brasileirao.component.scss']
})
export class BrasileiraoComponent implements OnInit {

  brasileiraoOptions;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenuOptions()
    .subscribe((data) => {
      this.brasileiraoOptions = data["brasileirao"];
    })
  }

}
