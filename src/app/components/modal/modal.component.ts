import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() open: boolean;
  @Input() title: string;
  @Output() openChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal = () => {
    this.open = false;
    this.openChange.emit(this.open);
  }

}
