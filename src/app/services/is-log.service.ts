import { Injectable } from '@angular/core';
import { FormObject } from '../interfaces/log/form-object';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLogService {
  constructor( private http: HttpClient) { }
  isLog = new BehaviorSubject<boolean>(false)
  
  setLog(form: FormObject){
    this.http.post('http://localhost/forum.com/', form).subscribe(
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
