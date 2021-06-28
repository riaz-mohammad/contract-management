import { DeactivateRoute } from 'src/app/types/types';

import { ContractRegistrationDataService } from 'src/app/services/contract-registration-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { zip } from 'rxjs';
import { PersonInfoComponent } from '../person-info/person-info.component';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.scss'],
})
export class AdvisorComponent implements OnInit, DeactivateRoute {
  @ViewChild(PersonInfoComponent, { static: true })
  infoForm!: PersonInfoComponent;
  constructor(private contractService: ContractRegistrationDataService) {}

  public onFinishRegistration(): void {
    console.log('Registration Finished...');
  }

  public formNoSubmitted(): boolean {
    return (this.infoForm.formNotSubmitted());
  }



  ngOnInit(): void {}
}
