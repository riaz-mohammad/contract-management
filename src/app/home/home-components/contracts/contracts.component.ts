import { Contract, Advisor, Client } from 'src/app/types/types';
import { Component, OnInit} from '@angular/core';
import { ContractRegistrationDataService } from 'src/app/services/contract-registration-data.service';
import { forkJoin } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Contracts {
  contract: Contract[];
  advisor: Advisor[];
  client: Client[];
}


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit {
  constructor(private contractDataService: ContractRegistrationDataService) {}
  public contractData$ = this.contractDataService.contractData$;
  public advisorData$ = this.contractDataService.advisorData$;
  public clientData$ = this.contractDataService.clientData$;
  
  public contracts: Contracts = {contract: [], advisor: [], client: []}

  ngOnInit(): void {
    
  }
}
 

   
  

