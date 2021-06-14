import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
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

  public get validity(): boolean {
    return this.formControl.dirty && this.formControl.invalid ? true : false;
  }

  ngOnInit(): void {}
}
