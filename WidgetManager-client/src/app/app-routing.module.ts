import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { AuthorComponent } from './author/author.component';
import { AdminComponent } from './admin/admin.component';
import {DetailComponent} from './detail/detail.component';
import {PersonalWidgetListComponent} from './personal-widget-list/personal-widget-list.component';
import {PersonalWidgetUpdateComponent} from './personal-widget-update/personal-widget-update.component';
import {PersonalWidgetCreateComponent} from './personal-widget-create/personal-widget-create.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'personal-widget-list', component: PersonalWidgetListComponent },
  {path: 'update-personal-widget/:id', component: PersonalWidgetUpdateComponent},
  {path: 'create-personal-widget', component: PersonalWidgetCreateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
