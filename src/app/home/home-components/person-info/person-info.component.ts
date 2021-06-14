import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
  @Input() nextPath!: [string];
  public formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
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