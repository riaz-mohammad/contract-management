import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Advisor, Client, Contract } from 'src/app/types/types';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent {
  @Input() contract$!: Observable<Contract>;
  @Input() client$!: Observable<Client>;
  @Input() advisor$!: Observable<Advisor>;

}
