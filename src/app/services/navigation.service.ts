import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _navigation: Subject<boolean> = new Subject();
  private _navigation$ = this._navigation.asObservable();
  private _showModal: Subject<boolean> = new Subject();
  public showModal$ = this._showModal.asObservable();

  public navigate(value: boolean): void {
    this._navigation.next(value);
    this._showModal.next(false);
  }


  public showModal(value: boolean): Observable<boolean> {
    this._showModal.next(value);
    return this._navigation$;
  }
}
  
