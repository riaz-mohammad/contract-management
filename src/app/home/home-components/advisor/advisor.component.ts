
import { ContractRegistrationDataService } from 'src/app/services/contract-registration-data.service';
import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.scss']
})
export class AdvisorComponent implements OnInit{

  constructor(private contractService: ContractRegistrationDataService) { }
  
  public onFinishRegistration(): void {
    console.log('Registration Finished...');
  }
      
  ngOnInit(): void {
   
  }  

}
