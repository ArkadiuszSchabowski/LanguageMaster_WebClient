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
import { A1Component } from './components/auth/level/a1/a1.component';
import { A2Component } from './components/auth/level/a2/a2.component';
import { B1Component } from './components/auth/level/b1/b1.component';
import { B2Component } from './components/auth/level/b2/b2.component';
import { C1Component } from './components/auth/level/c1/c1.component';
import { C2Component } from './components/auth/level/c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalInfoComponent,
    WordPolishToEnglishComponent,
    WordEnglishToPolishComponent,
    A1Component,
    A2Component,
    B1Component,
    B2Component,
    C1Component,
    C2Component,
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