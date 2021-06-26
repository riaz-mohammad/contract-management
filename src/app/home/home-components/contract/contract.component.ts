import { Advisor, Client, Contract, Contracts } from './../../../types/types';
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent {
  public contract!: Contract;
  public client!: Client;
  public advisor!: Advisor;
  
  @Input()
   set contractData(contractData: Contracts) {
    let { contract, client, advisor } = contractData;
    this.contract = contract;
    this.client = client;
    this.advisor = advisor;
  }
  
  
}
