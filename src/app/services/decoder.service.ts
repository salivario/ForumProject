import { Injectable } from '@angular/core';
import { decodeJwt } from 'jose';
import { Auto } from '../interfaces/log/auto';



@Injectable({
  providedIn: 'root'
})
export class DecoderService {

  constructor() { }
  decodeJWT(token:string): Auto{
    const decoded:Auto = decodeJwt(token);
    return decoded
  }

}
