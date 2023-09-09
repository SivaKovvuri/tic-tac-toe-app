import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  currentPlayer: 'X' | 'O' = 'X';
  cells: string[] = Array(9).fill('');

  onCellClick(index: number): void {
    if (!this.cells[index]) {
      this.cells[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  restartGame(): void {
    this.cells = Array(9).fill('');
    this.currentPlayer = 'X';
  }
}
