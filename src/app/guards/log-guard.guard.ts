import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLogService } from '../services/is-log.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuardGuard implements CanActivate {
  constructor(private islogserv: IsLogService, private route: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.islogserv.getLogAsValue() != true){
      return true;
    }
    else{
      return this.route.navigate(['/'])
    }
  }
  
}
