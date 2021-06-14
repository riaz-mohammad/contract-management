import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Age {
  min: number;
  max: number;
}
@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
  @Input() nextPath!: [string];
  public ages: Age = {
    min: 18,
    max: 60
  }
  public formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(this.ages.min), Validators.max(this.ages.max)]],
      email: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      nationalIdentificationNumber: ['', Validators.required]
    })
  }

  public onSubmit(): void {
    this.router.navigate(this.nextPath);
    console.log('Path Requested...')
  }
}