import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RSectionComponent } from './r-section/r-section.component';
import { LSectionComponent } from './l-section/l-section.component';
import { NavComponent } from './header/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RSectionComponent,
    LSectionComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    RSectionComponent,
    LSectionComponent,
    NavComponent
  ]
})
export class UiModule { }
