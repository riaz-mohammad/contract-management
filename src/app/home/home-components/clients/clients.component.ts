import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { contractDetail } from '../../../animations/contract-detail-animation';

import { ContractDataService } from './../../../services/contract-data.service';
import { Client, Contracts } from './../../../types/types';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [contractDetail],
})
export class ClientsComponent implements OnInit, OnDestroy {
  constructor(private contractDataService: ContractDataService) {}
  private sub: Subscription | undefined;
  public contracts: Array<Contracts> = [];
  private fullDetails: Subject<Contracts | undefined> = new Subject();
  public fullDetails$ = this.fullDetails.asObservable();

  public clientDetails(index: number): void {
    this.fullDetails.next(this.contracts[index]);
  }

  public closeClientDetails(): void {
    this.fullDetails.next();
  }

  ngOnInit(): void {
    this.sub = this.contractDataService.contracts$.subscribe((contract) => {
      this.contracts.push(contract);
    });
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
