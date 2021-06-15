import { Advisor } from './../../../types/types';
import { ContractRegistrationDataService } from 'src/app/services/contract-registration-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss']
})
export class AdvisorsComponent  {
  constructor(private contractDataService: ContractRegistrationDataService) { }
  public advisors$: Observable<Advisor | undefined> = this.contractDataService.advisorData$;
  public showAdvisor!: boolean;

  public showAdvisorInfo(): void {
    this.showAdvisor = !this.showAdvisor;
  }

}
