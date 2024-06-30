import { IsLogService } from 'src/app/services/is-log.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private isLogService: IsLogService){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      password: ['']
    })
  }
  submit(){
    this.isLogService.deleteProfile(this.form.value)
  }

}
