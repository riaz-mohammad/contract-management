import { Injectable } from '@angular/core';
import { forkJoin, BehaviorSubject, Observable } from 'rxjs';
import { Contract, Advisor, Client,} from './../types/types';


  

@Injectable({
  providedIn: 'root',
})
export class ContractRegistrationDataService {
  private contractDataSource = new BehaviorSubject<Contract | undefined>(undefined);
  private advisorDataSource = new BehaviorSubject<Advisor | undefined>(undefined);
  private clientDataSource = new BehaviorSubject<Client | undefined>(undefined);
  public contractData$ = this.contractDataSource.asObservable();
  public advisorData$ = this.advisorDataSource.asObservable();
  public clientData$ = this.clientDataSource.asObservable();
  
  
  public registerContract(contract: Contract): void {
    this.contractDataSource.next(contract);
  }

  public registerAdvisor(advisor: Advisor): void {
    this.advisorDataSource.next(advisor);
  }

  public registerClient(client: Client): void {
    this.clientDataSource.next(client);
  }
}
