import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Connect Four';
  boardCreated = false;
  boardGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.boardGroup = this.formBuilder.group({
      size: [undefined, [Validators.required, Validators.min(4)]]
    });
  }

  createBoard() {
    if (this.boardGroup.valid) {
      this.boardCreated = true;
    }
  }
}
