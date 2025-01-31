import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from 'src/app/components/public/games/games.component';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { RegisterComponent } from 'src/app/components/public/register/register.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GamesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  exports: [
    GamesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class PublicModule { }
