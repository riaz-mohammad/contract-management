
import { Injectable } from '@angular/core';
import { Credentials } from '../types/types';

export const CREDENTIALS = 'CREDENTIALS';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() { }
  public saveUserCredentials(credentials: Credentials): void {
    localStorage.setItem(CREDENTIALS, JSON.stringify(credentials));
  }

  public verifyUserCredentials(token: string): boolean {
    return localStorage.getItem(token) ? true : false;
  }

  public removeUserCredentials(token: string): void {
    localStorage.removeItem(token);
  }
    
}
