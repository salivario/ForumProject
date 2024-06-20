import { decodeJwt } from 'jose';
import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { Auto } from '../interfaces/log/auto';
import { BehaviorSubject, Observable } from 'rxjs';
import { IsLogService } from './is-log.service';
import { HttpClient } from '@angular/common/http';
import { DecoderService } from './decoder.service';
import { UpdateProfile } from '../interfaces/update-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient, private decoderService: DecoderService) { }
  profile = new BehaviorSubject<Profile>({    
    id: 0,
    name: "anonim",
    email: "anonim",
    avatar: "newbie",
    countOfMessages: 0,
    countOfTreads: 0,}); 
  profileData: any;
  setProfile(form: Auto){
    this.profileData = form
    delete this.profileData.answer;
    delete this.profileData.token;
    this.profile.next(this.profileData)
  }
  getProfile():Observable<Profile>{
    if(localStorage.getItem('token')){
      this.http.post<{token: string}>("http://localhost/forum.com/Profile/updateProfile.php", {token: localStorage.getItem('token'), email: this.profileData.email}).subscribe(
        (response)=>{
          localStorage.setItem('token', response.token),
          this.setProfile(this.decoderService.decodeJWT(response.token))
        }
      )
    }
    return this.profile.asObservable();
  }
}
