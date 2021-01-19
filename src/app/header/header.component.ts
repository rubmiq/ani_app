import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  timeNow = new Date();
  constructor() {
    setInterval(() => {
      this.timeNow = new Date();
    }, 1);
   }

  ngOnInit(): void {
  }

}
