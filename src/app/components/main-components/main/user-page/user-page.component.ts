import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  profile$!: Observable<Profile>;;
  ngOnInit(): void {
    this.profile$ = this.route.data.pipe(
      map((data: Data) => data['Profile'] as Profile)
    );
  }
}
