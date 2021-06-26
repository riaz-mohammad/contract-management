import { Subscription } from 'rxjs';
import { Contracts } from './../../../types/types';
import { ContractDataService } from './../../../services/contract-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContractRegistrationDataService } from 'src/app/services/contract-registration-data.service';






@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit, OnDestroy{
  constructor(private contractDataService: ContractDataService) {}
  public contracts: Array<Contracts> = [];
  private sub: Subscription | undefined;
  ngOnInit(): void {
    this.contractDataService.contracts$
      .subscribe(contract => this.contracts.push(contract))
  }
      
  ngOnDestroy(): void {
    this.sub ? this.sub.unsubscribe() : null;
  }
}


  
 

   
  

