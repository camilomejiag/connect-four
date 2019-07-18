import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {GameModalComponent} from './game-modal/game-modal.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() rows: number;
  @Input() columns: number;
  player: number;
  counter: number;
  boardGame: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.initializeBoard();
  }

  addTile(coordinates) {
    if (!this.boardGame[coordinates.columnIndex][0].highlight) {
      let highlighted = false;
      for (let i = 0; i < this.boardGame[coordinates.columnIndex].length - 1; i++) {
        if (this.boardGame[coordinates.columnIndex][i + 1].highlight && !highlighted) {
          this.boardGame[coordinates.columnIndex][i].highlight = true;
          this.boardGame[coordinates.columnIndex][i].player = this.player;
          highlighted = true;
        }
      }
      const maxColumn = this.boardGame[coordinates.columnIndex].length;
      if (!highlighted) {
        this.boardGame[coordinates.columnIndex][maxColumn - 1].highlight = true;
        this.boardGame[coordinates.columnIndex][maxColumn - 1].player = this.player;
      }
      this.counter++;
      if (this.counter >= 7) {
        this.checkForWinner(this.player);
      }
      this.player = this.player === 1 ? 2 : 1;
      if (this.counter === (this.rows * this.columns)) {
        this.finalizeGame();
      }
    }
  }

  initializeBoard() {
    this.counter = 0;
    this.player = 1;
    this.boardGame = new Array(Number(this.columns));
    for (let i = 0; i < this.columns; i++) {
      this.boardGame[i] = new Array(Number(this.rows));
      for (let j = 0; j < this.boardGame[i].length; j++) {
        this.boardGame[i][j] = {
          highlight: false,
          player: null
        };
      }
    }
  }

  finalizeGame(winner?) {
    const dialogRef = this.dialog.open(GameModalComponent, {
      width: '350px',
      backdropClass: 'dialog-backdrop',
      panelClass: 'dialog-panel',
      data: {
        completed: !winner,
        player: winner ? this.player : null
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.initializeBoard();
    });
  }

  checkForWinner(player) {
    // Check for vertical 4 in a column
    for (let i = 0; i < this.boardGame.length; i++) {
      for (let j = 0; j < this.boardGame[i].length - 3; j++) {
        if (this.boardGame[i][j].player !== null
          && this.boardGame[i][j].player === this.boardGame[i][j + 1].player
          && this.boardGame[i][j].player === this.boardGame[i][j + 2].player
          && this.boardGame[i][j].player === this.boardGame[i][j + 3].player) {
          this.finalizeGame(player);
        }
      }
    }
    // Check for horizontal 4 in a row
    for (let i = 0; i < this.boardGame.length - 3; i++) {
      for (let j = 0; j < this.boardGame[i].length; j++) {
        if (this.boardGame[i][j].player !== null
          && this.boardGame[i][j].player === this.boardGame[i + 1][j].player
          && this.boardGame[i][j].player === this.boardGame[i + 2][j].player
          && this.boardGame[i][j].player === this.boardGame[i + 3][j].player) {
          this.finalizeGame(player);
        }
      }
    }
    // Check for diagonal 4 in a row from upper left to lower right
    for (let i = 0; i < this.boardGame.length - 3; i++) {
      for (let j = 0; j < this.boardGame[i].length - 3; j++) {
        if (this.boardGame[i][j].player !== null
          && this.boardGame[i][j].player === this.boardGame[i + 1][j + 1].player
          && this.boardGame[i][j].player === this.boardGame[i + 2][j + 2].player
          && this.boardGame[i][j].player === this.boardGame[i + 3][j + 3].player) {
          this.finalizeGame(player);
        }
      }
    }
    // Check for diagonal 4 in a row from lower left to upper right
    for (let i = 0; i < this.boardGame.length - 3; i++) {
      for (let j = this.boardGame[i].length - 1; j >= 3; j--) {
        if (this.boardGame[i][j].player !== null
          && this.boardGame[i][j].player === this.boardGame[i + 1][j - 1].player
          && this.boardGame[i][j].player === this.boardGame[i + 2][j - 2].player
          && this.boardGame[i][j].player === this.boardGame[i + 3][j - 3].player) {
          this.finalizeGame(player);
        }
      }
    }
  }

}
