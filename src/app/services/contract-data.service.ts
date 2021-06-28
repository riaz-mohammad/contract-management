import { Injectable} from '@angular/core';
import { ReplaySubject, Observable, Subscription } from 'rxjs';

import { Contracts } from '../types/types';
import { ContractRegistrationDataService } from './contract-registration-data.service';

@Injectable({
  providedIn: 'root'
})
export class ContractDataService {
  private contractSource: ReplaySubject<Contracts> = new ReplaySubject();
  public contracts$: Observable<Contracts> = this.contractSource.asObservable();
  private sub: Subscription | undefined;
  constructor(private contractRegistrationService: ContractRegistrationDataService) {
     this.contractRegistrationService
      .contracts$.subscribe(
        ([contract, client, advisor]) => {
          this.contractSource.next({
            contract,
            client,
            advisor
          })
       }  
      )
   }

}
  
      
    
          
        

