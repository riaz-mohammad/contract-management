

import { Component} from '@angular/core';
import { ContractRegistrationDataService } from 'src/app/services/contract-registration-data.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent {
  constructor(private contractDataService: ContractRegistrationDataService) {}
  public contractData$ = this.contractDataService.contractData$;
  public advisorData$ =  this.contractDataService.advisorData$;
  public clientData$ =   this.contractDataService.clientData$;
  
}
 

   
  

