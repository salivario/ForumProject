import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { RresultResolver } from 'src/app/resolvers/admin/rresult.resolver';
import { ReactiveFormsModule } from '@angular/forms';

const adminRoutes: Routes = [
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'result', component: ResultComponent, resolve: {Rresult: RresultResolver}}

];


@NgModule({
  declarations: [
    AdminPanelComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes)
  ],
})
export class AdminModule { }
