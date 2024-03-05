import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-treads',
  templateUrl: './top-treads.component.html',
  styleUrls: ['./top-treads.component.scss']
})
export class TopTreadsComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    const data = this.route.snapshot.data['getTredsInfo'];
    console.log(data);
  }
}
