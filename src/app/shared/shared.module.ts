import { RegistrationsComponent } from './../home/home-components/registrations/registrations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CustomDatePipe } from './custom-date.pipe';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CustomDatePipe,
    RegistrationsComponent,
    LogoutModalComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    ButtonComponent,
    RegistrationsComponent,
    CustomDatePipe,
    LogoutModalComponent,
  ],
})
export class SharedModule {}
