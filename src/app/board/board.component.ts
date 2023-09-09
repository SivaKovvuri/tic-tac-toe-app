import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() cells: string[]=[];
  @Output() cellClick = new EventEmitter<number>();

  onCellClick(index: number): void {
    if (!this.cells[index]) {
      this.cellClick.emit(index);
    }
  }
}
