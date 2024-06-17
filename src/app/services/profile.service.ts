import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { Auto } from '../interfaces/log/auto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = new BehaviorSubject<Profile>({    
    id: 10000000,
    name: "anonim",
    email: "anonim",
    avatar: "newbie",
    countOfMessages: 0,
    countOfTreads: 0,}); 
  profileData: any;
  constructor() { }
  setProfile(form: Auto){
    this.profileData = form
    delete this.profileData.answer;
    delete this.profileData.token;
    this.profile.next(this.profileData)
  }
  getProfile():Observable<Profile>{
    return this.profile.asObservable();
  }
}
