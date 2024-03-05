import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForResolversService {
  attributes!: string
  constructor() { }
  setAttributes(t: string){
    return this.attributes = t
  }
  getAttributes(t: string){
    return this.attributes
  }
}
