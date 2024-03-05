import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      email: ['',Validators.required, Validators.minLength(1), Validators.email,Validators.pattern('/^\S+@\S+\.\S+$/')],
      pass: ['',Validators.required, Validators.minLength(8), Validators.maxLength(28)],
      nickname: ['', Validators.required, Validators.minLength(5), Validators.maxLength(28)],
      passconf: ['', Validators.required,]

    })
  }
  onSubmit(){
    if(this.form.value.pass !== this.form.value.passconf){
      this.passconf = true
    }
    else{
      delete this.form.value.passconf;
      this.chngLogService.setLog(this.form.value)
      this.route.navigate(['/'])
    }
    
  }
   

}
