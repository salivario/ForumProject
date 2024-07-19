import { ProfileResolver } from './resolvers/profile.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './components/main-components/main/guide/guide.component';
import { TopTreadsComponent } from './components/main-components/main/top-treads/top-treads.component';
import { RegComponent } from './components/main-components/main/reg-auto/reg/reg.component';
import { AutoComponent } from './components/main-components/main/reg-auto/auto/auto.component';
import { UserPageComponent } from './components/main-components/main/user-page/user-page.component';
import { HelpUsComponent } from './components/main-components/main/help-us/help-us.component';
import { LogGuardGuard } from './guards/log-guard.guard';
import { ProfileGuard } from './guards/profile.guard';
import { GetTredsInfoResolver } from './resolvers/get-treds-info.resolver';


const routes: Routes = [
  {path: '', component: GuideComponent},
  {path: 'registration', component: RegComponent, canActivate: [LogGuardGuard]},
  {path: 'tredlist', component: TopTreadsComponent, resolve: {Tread: GetTredsInfoResolver}},
  {path: 'authorization', component: AutoComponent, canActivate: [LogGuardGuard]},
  {path: 'profile', component: UserPageComponent, canActivate: [ProfileGuard],resolve: {Profile: ProfileResolver}},
  {path: 'help', component: HelpUsComponent},
  { path: 'profile-edit-delete', loadChildren: () => import('./components/lazy-components/profile-edit-delete/edit-del.module').then(m => m.EditDelModule) },
  { path: 'admin', loadChildren: () => import('./components/lazy-components/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
