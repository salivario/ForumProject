import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  constructor(private route: ActivatedRoute){}
  info!: any;
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.info = data['any'];
    }
    );
  }
}
