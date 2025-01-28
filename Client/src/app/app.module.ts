import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { PersonalInfoComponent } from './components/auth/profile/personal-info/personal-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordPolishToEnglishComponent } from './components/games/word-polish-to-english/word-polish-to-english.component';
import { WordEnglishToPolishComponent } from './components/games/word-english-to-polish/word-english-to-polish.component';
import { MaterialModule } from './_modules/material/material.module';
import { GamesComponent } from './components/public/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PersonalInfoComponent,
    WordPolishToEnglishComponent,
    WordEnglishToPolishComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }