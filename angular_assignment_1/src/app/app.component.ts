import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  texts: String[] = [];
  showPara: Boolean = true;
  noOfTimes:number = 0;

  toggleShowPara() {
    this.showPara = !this.showPara;
  }
  addText(text: String) {
    this.texts.push(text);
  }

  incrementClicks(){
    this.noOfTimes++;
  }
  title = 'angular_assignment_1';
}
