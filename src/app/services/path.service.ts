import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  currentPath!: string;
  currentTheme: string = 'Fallout3';
  constructor() { }
  setPath(p: string){
    this.currentPath = p;
  }
  getPath(){
    return this.currentPath;
  }
  setTheme(t: string){
    this.currentTheme = t;
  }
  getTheme(){
    return this.currentTheme
  }

}
