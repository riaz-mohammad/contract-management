import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { AuthorizationService, CREDENTIALS } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private _showModal: Subject<boolean> = new Subject();
  public showModal$: Observable<boolean> = this._showModal.asObservable();
  
  constructor(private router: Router,
              private authorizationService: AuthorizationService) { }
  
  public showModal(flag: boolean): void {
    this._showModal.next(flag);
  } 
    
  public logOut(flag: true): void {
    this._showModal.next(!flag);
    this.router.navigate(['/login'])
    this.authorizationService.removeUserCredentials(CREDENTIALS);
  }  
      

}
