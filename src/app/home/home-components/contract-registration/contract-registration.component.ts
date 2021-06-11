import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-registration',
  templateUrl: './contract-registration.component.html',
  styleUrls: ['./contract-registration.component.scss']
})
export class ContractRegistrationComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  public onSubmit(): void {
    console.log(this.formGroup.value);
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      registrationNumber: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      
      conclusionDate: this.formBuilder.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),

      validityDate: this.formBuilder.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),

      terminationDate: this.formBuilder.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),



    })
  }

}
