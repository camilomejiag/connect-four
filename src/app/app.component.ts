import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'connect-four';
  boardGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.boardGroup = this.formBuilder.group({
      rows: [undefined, [Validators.required, Validators.min(4)]],
      columns: [undefined, [Validators.required, Validators.min(4)]]
    });
  }

  createBoard() {

  }
}
