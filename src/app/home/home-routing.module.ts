import { ContractsComponent } from './home-components/contracts/contracts.component';
import { AdvisorComponent } from './home-components/advisor/advisor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './home-components/client/client.component';
import { ContractRegistrationComponent } from './home-components/contract-registration/contract-registration.component';
import { HomeComponent } from './home.component';
import { AdvisorsComponent } from './home-components/advisors/advisors.component';
import { ClientsComponent } from './home-components/clients/clients.component';
import { CanDeactivateRouteGuard } from '../services/can-deactivate-route.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  {
    path: 'registration',
    component: ContractRegistrationComponent,
    data: { animation: 'registration' },
    canDeactivate: [CanDeactivateRouteGuard],
  },
  {
    path: 'registration/client',
    component: ClientComponent,
    data: { animation: 'client' },
    canDeactivate: [CanDeactivateRouteGuard],
  },
  {
    path: 'registration/advisor',
    component: AdvisorComponent,
    data: { animation: 'advisor' },
    canDeactivate: [CanDeactivateRouteGuard],
  },
  {
    path: 'contracts',
    component: ContractsComponent,
    data: { animation: 'contracts' },
  },
  {
    path: 'advisors',
    component: AdvisorsComponent,
    data: { animation: 'advisors' },
  },
  {
    path: 'clients',
    component: ClientsComponent,
    data: { animation: 'clients' },
  },
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
