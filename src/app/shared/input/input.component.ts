import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { errorAnimation, showPasswordAnimation } from './error-animation';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [errorAnimation, showPasswordAnimation],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() min: number | undefined;
  @Input() max: number | undefined;
  public formControl = new FormControl('', Validators.required);

  public valueChanged(value: string): void {}
  public onTouched(): void {}

  constructor() {}

  writeValue(value: any): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public onValueChange(): void {
    this.valueChanged(this.formControl.value);
  }

  public get inValidity(): boolean {
    return this.formControl.dirty && this.formControl.invalid ? true : false;
  }

  public showOrHidePassword(): void {
    if (this.type === 'password') {
      this.type = 'text';
      return;
    }
    this.type = 'password';
  }
}
