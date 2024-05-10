import { Injectable } from '@angular/core';
import { FormObject } from '../interfaces/log/form-object';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLogService {
  constructor( private http: HttpClient) { }
  isLog = new BehaviorSubject<boolean>(false)

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  setLog(form: FormObject){
    console.log(form)
    this.http.post('http://localhost/forum.com/index.php', form, this.httpOptions).subscribe(
      (response) => {
        console.log('Успешный ответ от сервера:', response);
        this.isLog.next(true);
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
