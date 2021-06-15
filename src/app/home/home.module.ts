import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContractRegistrationComponent } from './home-components/contract-registration/contract-registration.component';
import { PersonInfoComponent } from './home-components/person-info/person-info.component';
import { ClientComponent } from './home-components/client/client.component';
import { AdvisorComponent } from './home-components/advisor/advisor.component';
import { RegistrationsComponent } from './home-components/registrations/registrations.component';
import { ContractsComponent } from './home-components/contracts/contracts.component';
import { AdvisorsComponent } from './home-components/advisors/advisors.component';
import { ClientsComponent } from './home-components/clients/clients.component';
import { ContractComponent } from './home-components/contract/contract.component';
import { TableHeaderComponent } from './home-components/table-header/table-header.component';
import { TableDataComponent } from './home-components/table-data/table-data.component';
import { DetailsComponent } from './home-components/details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContractRegistrationComponent,
    PersonInfoComponent,
    ClientComponent,
    AdvisorComponent,
    RegistrationsComponent,
    ContractsComponent,
    AdvisorsComponent,
    ClientsComponent,
    ContractComponent,
    TableHeaderComponent,
    TableDataComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
