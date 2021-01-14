import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ani-app';
  showItem = false;
  showMenu(){
    if (this.showItem == true) {
      this.showItem = false;
    }else{
      this.showItem = true
    }
  }
}
