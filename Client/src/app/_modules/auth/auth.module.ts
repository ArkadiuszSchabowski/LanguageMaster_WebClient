import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../material/material.module';

import { A1Component } from 'src/app/components/auth/level/a1/a1.component';
import { A2Component } from 'src/app/components/auth/level/a2/a2.component';
import { B1Component } from 'src/app/components/auth/level/b1/b1.component';
import { B2Component } from 'src/app/components/auth/level/b2/b2.component';
import { C1Component } from 'src/app/components/auth/level/c1/c1.component';
import { C2Component } from 'src/app/components/auth/level/c2/c2.component';

import { Lesson1A1Component } from 'src/app/components/auth/level/a1/lesson1-a1/lesson1-a1.component';


@NgModule({
  declarations: [
    A1Component,
    A2Component,
    B1Component,
    B2Component,
    C1Component,
    C2Component,
    Lesson1A1Component
  ],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  exports: [
    A1Component,
    A2Component,
    B1Component,
    B2Component,
    C1Component,
    C2Component,
    Lesson1A1Component
  ],
})
export class AuthModule {}
