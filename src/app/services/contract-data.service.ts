import { ContractRegistrationDataService } from './contract-registration-data.service';

import { ReplaySubject, Observable, Subscription } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { Contracts } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ContractDataService {
  private contractSource: ReplaySubject<Contracts> = new ReplaySubject();
  public contracts$: Observable<Contracts> = this.contractSource.asObservable();
  private sub: Subscription | undefined;
  constructor(private contractRegistrationService: ContractRegistrationDataService) {
    this.sub = this.contractRegistrationService
      .contracts$.subscribe(
        ([contract, client, advisor]) => {
          this.contractSource.next({
            contract,
            client,
            advisor
          }),
            this.sub?.unsubscribe();
       }  
      )
   }

}
  
      
    
          
        

