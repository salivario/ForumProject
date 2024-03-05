import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide/guide.component';
import { RegAutoModule } from './reg-auto/reg-auto.module';
import { TopTreadsComponent } from './top-treads/top-treads.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HelpUsComponent } from './help-us/help-us.component';
import { RouterModule } from '@angular/router';
import { GetTredsInfoResolver } from 'src/app/resolvers/get-treds-info.resolver';



@NgModule({
  declarations: [
    GuideComponent,
    TopTreadsComponent,
    UserPageComponent,
    HelpUsComponent,
    
  ],
  imports: [
    CommonModule,
    RegAutoModule,
    RouterModule
  ],
  providers:[
    GetTredsInfoResolver
  ]
})
export class MainModule { }
