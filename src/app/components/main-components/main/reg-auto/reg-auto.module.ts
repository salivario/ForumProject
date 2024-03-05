import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg/reg.component';
import { AutoComponent } from './auto/auto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    RegComponent,
    AutoComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class RegAutoModule { }
