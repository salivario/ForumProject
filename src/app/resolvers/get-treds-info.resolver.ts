import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { PathService } from '../services/path.service';

@Injectable({
  providedIn: 'root'
})
export class GetTredsInfoResolver implements Resolve<any> {
  constructor(private http: HttpClient, private pathService: PathService, private route: Router){}
  urlString = '';
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.urlString = "http://localhost/forum.com/treads/getTreadsList.php";
    
    const curPath = this.pathService.getTheme(); 
    const urlWithParameters = `${this.urlString}?theme=${curPath}`;

    return this.http.get(urlWithParameters).pipe(
      map((response) => {
        return { success: true, data: response };
      }),
      catchError((error) => {
        alert('Loading error: ' + error.status);
        this.route.navigate(['/'])
        return of({ success: false });
      }),
    );
  }
}
