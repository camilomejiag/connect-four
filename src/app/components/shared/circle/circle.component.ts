import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {

  @Input() highlight: boolean;
  @Input() player: number;
  @Input() columnIndex: number;
  @Input() rowIndex: number;
  @Output() clicked: EventEmitter<{columnIndex: number, rowIndex: number}> = new EventEmitter();

  constructor() { }

  circleClicked() {
    this.clicked.emit({
      columnIndex: this.columnIndex,
      rowIndex: this.rowIndex
    });
  }

}
