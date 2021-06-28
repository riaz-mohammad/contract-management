import { Subscription } from 'rxjs';
import { Contracts } from './../../../types/types';
import { ContractDataService } from './../../../services/contract-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit, OnDestroy {
  constructor(private contractDataService: ContractDataService) {}
  public contracts: Array<Contracts> = [];
  private sub: Subscription | undefined;
  ngOnInit(): void {
    this.contractDataService.contracts$.subscribe((contract) =>
      this.contracts.push(contract)
    );
  }

  ngOnDestroy(): void {
    this.sub ? this.sub.unsubscribe() : null;
  }

  public contract = {
    client: {
      name: 'HELLO',
      surname: 'WORLD',
      age: 50,
      email: 'HELLOWORLD@GMAIL.COM',
      telephoneNumber: '03339301255',
      nationalIdentificationNumber: 'AAABBBCCC',
    },
    contract: {
      registrationNumber: 'AAABBB11122',
      institution: 'NATIONAL BANK',
      conclusionDate: { day: 27, month: 6, year: 2021 },
      validityDate: { day: 28, month: 6, year: 2021 },
      terminationDate: { day: 28, month: 7, year: 2025 },
    },

    advisor: {
      name: 'HELLO',
      surname: 'WORLD',
      age: 50,
      email: 'HELLOWORLD@GMAIL.COM',
      telephoneNumber: '03339301255',
      nationalIdentificationNumber: 'AAABBBCCC',
    },
  };
}


  
 

   
  

