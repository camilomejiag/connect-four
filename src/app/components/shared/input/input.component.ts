import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatFormFieldAppearance} from '@angular/material';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() control: FormControl;
  @Input() label: string;
  appearance: MatFormFieldAppearance = 'legacy';

  constructor() {
  }

}
