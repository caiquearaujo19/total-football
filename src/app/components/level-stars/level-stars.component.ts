import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'level-stars',
  templateUrl: './level-stars.component.html',
  styleUrls: ['./level-stars.component.scss']
})
export class LevelStarsComponent implements OnInit {

  @Input() level:number;

  filledStars: number;
  emptyStars: number;

  constructor() { }

  ngOnInit(): void {
    this.filledStars = Math.floor(this.level);
    this.emptyStars = 5 - Math.ceil(this.level);
  }

  qtdStars = (qtd) => {
    return Array(qtd);
  }

  isInteger = (number) => {
    return Number.isInteger(number);
  }

}
