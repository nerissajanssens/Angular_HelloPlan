import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authenticateService: AuthenticateService, private router: Router) { }
  //functie om te kijken of er een gebruiker is ingelogd, 
  //indien er niemand is ingelogd zal hij de gebruiker doorverwijzen naar de loginpagina
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._authenticateService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
