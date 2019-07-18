import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BoardComponent} from '../sections/board/board.component';
import {CircleComponent} from './circle/circle.component';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';

const components = [
  BoardComponent,
  CircleComponent,
  InputComponent,
  ButtonComponent
];

const materialModules = [
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  CommonModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...materialModules
  ]
})
export class SharedModule {
}
