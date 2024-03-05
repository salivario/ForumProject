import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ForumProject';
  isTread!: boolean;
  constructor(private route: Router){}
  ngOnInit() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/tredlist'){
          this.isTread = true
        }
        else{
          this.isTread = false
        };
      }
    });
  }
  

}
