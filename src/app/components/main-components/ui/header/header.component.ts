import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IsLogService } from 'src/app/services/is-log.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private islogserv: IsLogService){}
  isLog!: boolean;
  isLogSub!:Subscription
  ngOnInit(){
    this.isLogSub = this.islogserv.getLog().subscribe(state => {this.isLog = state
     if(state == true){
      this.unsub()
     } 
    })


  }
  unsub(){
    this.isLogSub.unsubscribe()
  }
}
