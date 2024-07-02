import { ProfileService } from './profile.service';
import { Auto } from './../interfaces/log/auto';
import { Injectable } from '@angular/core';
import { FormObject } from '../interfaces/log/form-object';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { RegInterface } from '../interfaces/log/response-interface';
import { DecoderService } from './decoder.service';
import { DeleteForm } from '../interfaces/delete-form';

@Injectable({
  providedIn: 'root'
})
export class IsLogService {
  constructor( private http: HttpClient, private route: Router, private profileService: ProfileService, private decoderService: DecoderService) {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      this.profileService.setProfile(this.decoderService.decodeJWT(token));
      this.isLog.next(true);
    }
   }
  isLog = new BehaviorSubject<boolean>(false)
  saveform!: FormObject;
  private tokenKey = 'token';
  formdata(form: FormObject){
    this.saveform = form
    this.setLog(form)
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  isLoggedin(){

  }
  getSaveForm(){
    return this.saveform
  }
  setLog(form: FormObject){
    this.http.post<RegInterface>('http://localhost/forum.com/requests/autoreg/reg.php', form, this.httpOptions).subscribe(
      (response) => {
        if(response.message == "Учетная запись успешно создана"){
          this.route.navigate(['/authorization'])
          alert("Great! Now log in into your account.")
        }
        else{
          if(response.message == "Пользователь с таким именем уже существует"){
            this.route.navigate(['/registration'])
            alert("User with this name alredy exist")
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
    this.http.post<Auto>('http://localhost/forum.com/requests/autoreg/auto.php', form, this.httpOptions).subscribe(
      (response)=>{
        if(response.answer == "успех!"){
          localStorage.setItem('token', response.token);
          this.profileService.setProfile(this.decoderService.decodeJWT(response.token));
          this.isLog.next(true);
          this.route.navigate(['/profile']);
        }
      },
      (error)=>{
        console.log("error:", error)
      }
    )
  }
  LogOut(){

  }

  deleteProfile(form: DeleteForm){
    this.http.post<any>('http://localhost/forum.com/Profile/deleteProfile.php', form).subscribe(
      (response)=>{
        alert(response.message)
        if(response.message == 'We send confirmation message on your mail'){
          this.isLog.next(false);
          localStorage.removeItem('token')
          this.route.navigate(['/registration'])
        }
        if(response.message == 'Incorrect name or password'){
          this.route.navigate(['/delete'])
        }
      },
      (error)=>{
        console.log("Something went wrong: " + error)
      }
    )
  }

}
