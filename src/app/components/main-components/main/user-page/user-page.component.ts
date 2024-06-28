import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  profile!: Profile;
  loading: boolean = true;
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.profile = data['Profile'];
      this.loading = false
    });
  }
}
