import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, combineLatest, forkJoin } from 'rxjs';
import { Contract, Advisor, Client,} from './../types/types';


  

@Injectable({
  providedIn: 'root',
})
export class ContractRegistrationDataService {
  private contractDataSource = new ReplaySubject<Contract>();
  private advisorDataSource = new ReplaySubject<Advisor>();
  private clientDataSource = new ReplaySubject<Client>();
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
