import { ProfileService } from './profile.service';
import { Auto } from './../interfaces/log/auto';
import { Injectable } from '@angular/core';
import { FormObject } from '../interfaces/log/form-object';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { RegInterface } from '../interfaces/log/response-interface';

@Injectable({
  providedIn: 'root'
})
export class IsLogService {
  constructor( private http: HttpClient, private route: Router, private profileService: ProfileService) { }
  isLog = new BehaviorSubject<boolean>(false)
  saveform!: FormObject
  formdata(form: FormObject){
    this.saveform = form
    console.log(this.saveform)
    this.setLog(form)
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getSaveForm(){
    return this.saveform
  }
  setLog(form: FormObject){
    this.http.post<RegInterface>('http://localhost/forum.com/requests/autoreg/reg.php', form, this.httpOptions).subscribe(
      (response) => {
        console.log('Успешный ответ от сервера:', response);
        if(response.message == "Учетная запись успешно создана"){
          this.route.navigate(['/authorization'])
          alert('Учетная запись успешно создана, теперь войдите в неё!')
        }
        else{
          if(response.message == "Пользователь с таким именем уже существует"){
            this.route.navigate(['/registration'])
            alert("Пользователь с таким именем уже существует")
          }
        }
      },
      (error) => {
        console.error('Ошибка при отправке запроса на сервер:', error);
      }
    );
  }
  getLog(){
    return this.isLog.asObservable()
  }
  getLogAsValue(){
    return this.isLog.getValue()
  }
  autorise(form: FormObject){
    console.log(form)
    this.http.post<Auto>('http://localhost/forum.com/requests/autoreg/auto.php', form, this.httpOptions).subscribe(
      (response)=>{
        console.log("Ответ от сервера", response);
        if(response.answer == "успех!"){
          this.profileService.setProfile(response);
          localStorage.setItem('token', response.token);
          this.isLog.next(true);
          this.route.navigate(['/profile']);

        }
      },
      (error)=>{
        console.log("ашыбка:", error)
      }
    )
  }

}
