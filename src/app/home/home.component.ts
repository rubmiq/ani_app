import { Component, OnInit } from '@angular/core';
import { BackService } from '../back/back.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
data = this.dataBase.data
  constructor(public dataBase:BackService) { }

  ngOnInit(): void {
  }

}
