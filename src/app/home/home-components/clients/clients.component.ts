import { Client } from './../../../types/types';
import { Observable } from 'rxjs';
import { ContractRegistrationDataService } from './../../../services/contract-registration-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  constructor(private contractDataService: ContractRegistrationDataService) { }
  public client$: Observable<Client | undefined> = this.contractDataService.clientData$;
  public showClient!: boolean;
  public showClientInfo(): void {
    this.showClient = !this.showClient;
  }
}
