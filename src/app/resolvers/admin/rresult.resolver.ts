import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class RresultResolver implements Resolve<any> {
  constructor(private adminService: AdminService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.adminService.adminAction();
  }
}
