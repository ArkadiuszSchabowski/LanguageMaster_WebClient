import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson1-a1',
  templateUrl: './lesson1-a1.component.html',
  styleUrls: ['./lesson1-a1.component.scss']
})
export class Lesson1A1Component {

  isHint = false;
  hintsLeft: number = 2;

  showHint(){
    this.isHint = !this.isHint
    this.hintsLeft--
  }
}
