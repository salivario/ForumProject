import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormObject } from 'src/app/interfaces/log/form-object';
import { IsLogService } from 'src/app/services/is-log.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private route: Router, private chngLogService: IsLogService){}
  form!: FormGroup
  passconf: boolean = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nickname: [],
      email: [],
      password: [],
      passconf: []

    });

  }
  onSubmit(){
    if(this.form.value.password !== this.form.value.passconf){
      this.passconf = true
    }
    else{
      delete this.form.value.passconf;
      this.chngLogService.formdata(this.form.value)
    }
    
  }
   

}
