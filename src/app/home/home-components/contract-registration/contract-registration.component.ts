import {FormGroup, Validators, FormBuilder,} from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Dates {
  minDay: number;
  maxDay: number;
  minMonth: number;
  maxMonth: number;
  minYear: number;
  maxYear: number;
}
@Component({
  selector: 'app-contract-registration',
  templateUrl: './contract-registration.component.html',
  styleUrls: ['./contract-registration.component.scss']
})
export class ContractRegistrationComponent implements OnInit {
  public formGroup!: FormGroup;
  public showNextStep!: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  public dates: Dates = {
    minDay: new Date().getDate(),
    maxDay: 31,
    minMonth: new Date().getMonth() + 1,
    maxMonth: 12,
    minYear: new Date().getFullYear(),
    maxYear: 2050
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      registrationNumber: ['', [Validators.required]],
      institution: ['', [Validators.required]],

      conclusionDate: this.formBuilder.group({
        day: ['', [Validators.required, Validators.min(this.dates.minDay), Validators.max(this.dates.minDay)]],
        month: ['', [Validators.required, Validators.min(this.dates.minMonth), Validators.max(this.dates.minMonth)]],
        year: ['', [Validators.required, Validators.min(this.dates.minYear), Validators.max(this.dates.minYear)]]
      }),

      validityDate: this.formBuilder.group({
        day: ['', [Validators.required, Validators.min(this.dates.minDay + 1), Validators.max(this.dates.maxDay)]],
        month: ['', [Validators.required, Validators.min(this.dates.minMonth), Validators.max(this.dates.maxMonth)]],
        year: ['', [Validators.required, Validators.min(this.dates.minYear), Validators.max(this.dates.maxYear)]]
      }),

      terminationDate: this.formBuilder.group({
        day: ['', [Validators.required, Validators.min(this.dates.minDay), Validators.max(this.dates.maxDay)]],
        month: ['', [Validators.required, Validators.min(this.dates.minMonth), Validators.max(this.dates.maxMonth)]],
        year: ['', [Validators.required, Validators.min(this.dates.minYear + 1), Validators.max(this.dates.maxYear)]]
      }),
    }, { updateOn: 'submit'})
  }
 
  
  public get conclusionDate(): FormGroup {
    return this.formGroup.get('conclusionDate') as FormGroup;
  }

  public get validityDate(): FormGroup {
    return this.formGroup.get('validityDate') as FormGroup;
  }

  public get terminationDate(): FormGroup {
    return this.formGroup.get('terminationDate') as FormGroup;
  }

  public onSubmit(): void {
   this.router.navigate(['home/registration/client']);
  }
     
    
     
    
    
    

}