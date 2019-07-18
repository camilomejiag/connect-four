import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-finalized-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.scss']
})
export class GameModalComponent {

  constructor(
    public dialogRef: MatDialogRef<GameModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { completed: boolean, player: number }
  ) {
  }

  onClick() {
    this.dialogRef.close();
  }

}
