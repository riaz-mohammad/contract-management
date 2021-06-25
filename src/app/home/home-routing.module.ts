import { ContractsComponent } from './home-components/contracts/contracts.component';
import { AdvisorComponent } from './home-components/advisor/advisor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './home-components/client/client.component';
import { ContractRegistrationComponent } from './home-components/contract-registration/contract-registration.component';
import { HomeComponent } from './home.component';
import { AdvisorsComponent } from './home-components/advisors/advisors.component';
import { ClientsComponent } from './home-components/clients/clients.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'home'} },
  { path: 'registration', component: ContractRegistrationComponent, data: {animation: 'registration'} },
  { path: 'registration/client', component: ClientComponent, data: {animation: 'client'} }, 
  { path: 'registration/advisor', component: AdvisorComponent, data: {animation: 'advisor'} },
  { path: 'contracts', component: ContractsComponent },
  { path: 'advisors', component: AdvisorsComponent },
  { path: 'clients', component: ClientsComponent },
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
