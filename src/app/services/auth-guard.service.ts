import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Apparielservice } from './appariel.service';
import { Authservice } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authservice: Authservice,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authservice.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }

  }
  
   

  


}
