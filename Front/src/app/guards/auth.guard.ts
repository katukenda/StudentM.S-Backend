import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  canActivate(): boolean{
    if (this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }
  
}
