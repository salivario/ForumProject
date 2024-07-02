import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  isAdmin!: string
  setStatus(status: string){
    this.isAdmin = status; 
  }
}
