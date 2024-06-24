import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  constructor(private FormBuilder: FormBuilder, private profileService: ProfileService){}
  options: string[] = ['newbie', 'atom', 'BoS', 'buble', 'cool', 'dead', 'dog', 'helmet', 'lady', 'love', 'mask1', 'mask2', 'mask3', 'mask4', 'nuka', 'scull', 'tom', 'trollscull'];
  form!: FormGroup;
  data!: any;
  ngOnInit(){
    this.data = this.profileService.getAvatarAndName()
    this.form = this.FormBuilder.group({
      name: [this.data.name],
      avatar: [this.data.avatar],
    }) 
  }

}
