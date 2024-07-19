import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit{
  constructor(private adminService: AdminService,private formBuider: FormBuilder){}
  status: string = 'superadmin';
  switch: boolean = true;
  form1!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;
  form4!: FormGroup;
  ngOnInit(): void {
    this.form1 = this.formBuider.group({
      name: ['']
    });

    this.form2 = this.formBuider.group({
      name: ['']
    });

    this.form3 = this.formBuider.group({
      id: [''],
      banDate: [''],
      reason: ['']
    });

    this.form4 = this.formBuider.group({
      adminStatus: ['']
    });
  }
  onSubmit(){

  }
}
