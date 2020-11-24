import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DetailComponent } from './detail/detail.component';
import { PersonalWidgetCreateComponent } from './personal-widget-create/personal-widget-create.component';
import { PersonalWidgetUpdateComponent } from './personal-widget-update/personal-widget-update.component';
import { PersonalWidgetListComponent } from './personal-widget-list/personal-widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthorComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    DetailComponent,
    PersonalWidgetCreateComponent,
    PersonalWidgetUpdateComponent,
    PersonalWidgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
