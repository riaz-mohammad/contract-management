import { DeactivateRoute } from 'src/app/types/types';
import { PersonInfoComponent } from './../person-info/person-info.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit, DeactivateRoute {
  @ViewChild(PersonInfoComponent, { static: true })
  infoForm!: PersonInfoComponent;
  constructor() {}
  public formNoSubmitted(): boolean {
    return (this.infoForm.formNotSubmitted());
  }

  ngOnInit(): void {}
}
