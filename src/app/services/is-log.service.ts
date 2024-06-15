import { Injectable } from '@angular/core';
import { FormObject } from '../interfaces/log/form-object';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ResponseInterface } from '../interfaces/log/response-interface';

@Injectable({
  providedIn: 'root'
})
export class IsLogService {
  constructor( private http: HttpClient, private route: Router) { }
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
    this.http.post<ResponseInterface>('http://localhost/forum.com/index.php', form, this.httpOptions).subscribe(
      (response) => {
        console.log('Успешный ответ от сервера:', response);
        if(response.message == "Учетная запись успешно создана"){
          this.isLog.next(true);
          this.route.navigate(['/'])
          alert('Учетная запись успешно создана')
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

}
