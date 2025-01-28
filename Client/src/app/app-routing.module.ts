import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { MemoryComponent } from './components/games/memory/memory.component';
import { SoundMatchComponent } from './components/games/sound-match/sound-match.component';
import { WordPolishToEnglishComponent } from './components/games/word-polish-to-english/word-polish-to-english.component';
import { WordEnglishToPolishComponent } from './components/games/word-english-to-polish/word-english-to-polish.component';
import { GamesComponent } from './components/public/games/games.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  { path: "games", component: GamesComponent },
  { path: "games/memory", component: MemoryComponent },
  { path: "games/sound-match", component: SoundMatchComponent },
  { path: "games/word-polish-to-english", component: WordPolishToEnglishComponent },
  { path: "games/word-english-to-polish", component: WordEnglishToPolishComponent },
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
