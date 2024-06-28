import { Router } from '@angular/router';
import { decodeJwt } from 'jose';
import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { Auto } from '../interfaces/log/auto';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IsLogService } from './is-log.service';
import { HttpClient } from '@angular/common/http';
import { DecoderService } from './decoder.service';
import { UpdateProfile } from '../interfaces/update-profile';
import { Edit } from '../interfaces/edit-log/edit';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient, private decoderService: DecoderService, private route: Router) { }
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
  getProfile(): Observable<Profile> {
    if (localStorage.getItem('token')) {
      return this.http.post<{ token: string }>("http://localhost/forum.com/Profile/updateProfile.php", {
        token: localStorage.getItem('token'),
        email: this.profileData.email
      }).pipe(
        map((response) => {
          localStorage.setItem('token', response.token);
          return this.decoderService.decodeJWT(response.token);
        }),
        tap((decodedProfile) => {
          this.profile.next(decodedProfile);
        })
      );
    } else {
      return this.profile.asObservable();
    }
  }

  getAvatarAndName(){
    return {avatar: this.profileData.avatar, name: this.profileData.name}
  }
  editProfile(form:Edit){
    this.http.patch("http://localhost/forum.com/Profile/editProfile.php", form).subscribe(
        (response)=>{
          console.log(response)
          this.route.navigate(['/profile'])
        },
        (error) => {
          alert('Ошибка при обновлении профиля:' + `${error}`);
        }
      )
  }
}
