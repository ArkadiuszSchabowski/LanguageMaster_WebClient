import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isHint = false;
  isLogin = true;

  showHint(){
    this.isHint = !this.isHint
  }
}
