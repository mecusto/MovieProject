import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmService } from './services/film.service';
import { CardComponent } from './shared/components/card/card.component';
import { UsersComponent } from './pages/users/users.component';
import { UsercardComponent } from './shared/components/usercard/usercard.component';
import { UserComponent } from './pages/user/user.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    UsersComponent,
    UsercardComponent,
    UserComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
