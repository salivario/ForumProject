import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchUser } from '../interfaces/admin/search-user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  form: SearchUser = {
    method: 'search',
  }
  setForm(method:string,id:string,name: string, date: string, description: string){
    switch(method){
      case 'search': 
        this.form.method = method
        this.form.name = name;
        break;
      case 'usertreads':
        this.form.method = method
        this.form.name = name;
        break;
      case 'ban':
        this.form.method = method
        this.form.id = id;
        this.form.date = date;
        this.form.description = description;
        break;
      case 'makeadmin':
        this.form.method = method
        this.form.id = id;
        this.form.name = name;
        break;
      default:
        return;
    }
  }
  adminAction(){

    this.http.post<any>('http://localhost/forum.com/admin/adminPanelInterface.php', this.form).subscribe(
      (response)=>{
        return response
      },
      (error)=>{
        console.log('error: ' + error)
      }
    )
    
  }
}
