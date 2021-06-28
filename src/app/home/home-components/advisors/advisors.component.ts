
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { advisorButtonAnimation } from '../../../animations/button-animation';
import { contractDetail } from '../../../animations/contract-detail-animation';


import { ContractDataService } from './../../../services/contract-data.service';
import { Advisor, Contracts } from './../../../types/types';


@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss'],
  animations: [contractDetail, advisorButtonAnimation],
})
export class AdvisorsComponent implements OnInit, OnDestroy {
  constructor(private contractDataService: ContractDataService) {}
  private sub: Subscription | undefined;
  public contracts: Array<Contracts> = [];
  public totalContractsDone: Array<Contracts> = [];

  public totalContracts(index: number): void {
    let requestedAdvisor = this.contracts[index].advisor;
    this.contracts.forEach((contract) => {
      let { advisor } = contract;
      if (
        advisor.name === requestedAdvisor.name &&
        advisor.surname === requestedAdvisor.surname &&
        advisor.nationalIdentificationNumber ===
          requestedAdvisor.nationalIdentificationNumber
      ) {
        this.totalContractsDone.push(contract);
      }
    });
  }

  public closeTotalContract(): void {
    this.totalContractsDone = [];
  }

  ngOnInit(): void {
    this.sub = this.contractDataService.contracts$.subscribe((contract) => {
      this.contracts.push(contract);
    });
  }
  ngOnDestroy(): void {
    this.sub ? this.sub.unsubscribe() : null;
  }
}
