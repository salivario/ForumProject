import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsLogService } from 'src/app/services/is-log.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private route: Router, private chngLogService: IsLogService){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit(){
    this.chngLogService.autorise(this.form.value)
  }
   

}
