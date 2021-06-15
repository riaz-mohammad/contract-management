import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CustomDatePipe } from './custom-date.pipe';



@NgModule({
  declarations: [InputComponent, ButtonComponent, CustomDatePipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, ButtonComponent, CustomDatePipe],
})
export class SharedModule {}
