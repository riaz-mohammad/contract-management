import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, ButtonComponent]
})
export class SharedModule {}
