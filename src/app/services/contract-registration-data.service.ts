import { Injectable } from '@angular/core';
import { ReplaySubject, zip} from 'rxjs';
import { Contract, Advisor, Client} from './../types/types';


  

@Injectable({
  providedIn: 'root',
})
export class ContractRegistrationDataService {
  private contractDataSource = new ReplaySubject<Contract>(1);
  private advisorDataSource = new ReplaySubject<Advisor>(1);
  private clientDataSource = new ReplaySubject<Client>(1);

  public contractData$ = this.contractDataSource.asObservable();
  public advisorData$ = this.advisorDataSource.asObservable();
  public clientData$ = this.clientDataSource.asObservable();
  
  //If the user completed all the three steps,
  public contracts$ = zip(
    this.contractData$,
    this.clientData$,
    this.advisorData$
  );
  
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
