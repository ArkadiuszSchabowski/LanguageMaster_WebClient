import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonalInfoComponent } from './components/auth/profile/personal-info/personal-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordPolishToEnglishComponent } from './components/games/word-polish-to-english/word-polish-to-english.component';
import { WordEnglishToPolishComponent } from './components/games/word-english-to-polish/word-english-to-polish.component';
import { MaterialModule } from './_modules/material/material.module';
import { PublicModule } from './_modules/public/public.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalInfoComponent,
    WordPolishToEnglishComponent,
    WordEnglishToPolishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PublicModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }