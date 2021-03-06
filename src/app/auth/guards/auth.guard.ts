import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../services/auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSvc: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.authSvc.user$.pipe(map(user => {
      if (!user) {
        this.router.navigate(['login']).then(r => r).catch(error => console.error(error));
        return false;
      }
      return true;
    }));
  }
}
