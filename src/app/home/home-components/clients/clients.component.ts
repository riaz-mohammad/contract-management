import { ContractDataService } from './../../../services/contract-data.service';
import { Client } from './../../../types/types';
import { Observable, Subscription } from 'rxjs';
import { ContractRegistrationDataService } from './../../../services/contract-registration-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit{
  constructor(private contractRegistrationService: ContractRegistrationDataService,
              private contractDataService: ContractDataService) { }
  public client$: Observable<Client | undefined> = this.contractRegistrationService.clientData$;
  public showClient!: boolean;
  public clients: Array<Client> = [];
  private sub: Subscription | undefined;
  public showClientInfo(): void {
    this.showClient = !this.showClient;
  }

  ngOnInit(): void {
    this.sub = this.contractDataService.contracts$
              .subscribe(({ client }) => {
                this.clients.push(client);
              })
  }
}
