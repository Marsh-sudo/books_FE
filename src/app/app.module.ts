import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';

import { BookServiceService } from './book-service.service';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    CategoryComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:BooksComponent},
      {path:'login',component: LoginComponent},
      {path:'sign-up',component: SignUpComponent},
      {path:'Category',component:CategoryComponent}
      
    ])
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
