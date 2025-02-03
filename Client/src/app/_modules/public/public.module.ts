import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from 'src/app/components/public/games/games.component';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from 'src/app/components/public/register/register.component';

@NgModule({
  declarations: [
    GamesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, MaterialModule],
  exports: [GamesComponent, HomeComponent, LoginComponent, RegisterComponent],
})
export class PublicModule {}
