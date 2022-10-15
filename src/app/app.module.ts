import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';

import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZorroModule } from './zorro/zorro.module';
import { LoginComponent } from './login/login.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './register/register.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DetailComponent,
    TableComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ZorroModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'campo requerido',
          email: 'ingrese un email valido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),

  ],
  providers: [ CookieService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
