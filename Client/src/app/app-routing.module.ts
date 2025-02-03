import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A1Component } from './components/auth/level/a1/a1.component';
import { A2Component } from './components/auth/level/a2/a2.component';
import { B1Component } from './components/auth/level/b1/b1.component';
import { B2Component } from './components/auth/level/b2/b2.component';
import { C1Component } from './components/auth/level/c1/c1.component';
import { C2Component } from './components/auth/level/c2/c2.component';
import { HomeComponent } from './components/public/home/home.component';
import { MemoryComponent } from './components/games/memory/memory.component';
import { SoundMatchComponent } from './components/games/sound-match/sound-match.component';
import { WordPolishToEnglishComponent } from './components/games/word-polish-to-english/word-polish-to-english.component';
import { WordEnglishToPolishComponent } from './components/games/word-english-to-polish/word-english-to-polish.component';
import { GamesComponent } from './components/public/games/games.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/memory', component: MemoryComponent },
  { path: 'games/sound-match', component: SoundMatchComponent },
  {
    path: 'games/word-polish-to-english',
    component: WordPolishToEnglishComponent,
  },
  {
    path: 'games/word-english-to-polish',
    component: WordEnglishToPolishComponent,
  },
  {
    path: 'level',
    children: [
      { path: 'a1', component: A1Component },
      { path: 'a2', component: A2Component },
      { path: 'b1', component: B1Component },
      { path: 'b2', component: B2Component },
      { path: 'c1', component: C1Component },
      { path: 'c2', component: C2Component },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
