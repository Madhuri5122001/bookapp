import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { TitlePipe } from './title.pipe';
import { AuthorPipe } from './author.pipe';
import { PricePipe } from './price.pipe';
import { YearPipe } from './year.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ListBookComponent,
    ViewBookComponent,
    EditBookComponent,
    TitlePipe,
    AuthorPipe,
    PricePipe,
    YearPipe,
    HeaderComponent,
    ListOrdersComponent,
    LoginComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
