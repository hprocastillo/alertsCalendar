import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {AuthService} from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authSvc: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.authSvc.user$.pipe(map(user => {
      if (user) {
        this.router.navigate(['dashboard']).then(r => r).catch(error => console.error(error));
        return false;
      }
      return true;
    }));
  }
}
