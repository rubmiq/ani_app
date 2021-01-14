import { Component, OnInit } from '@angular/core';
import { BackService } from '../back/back.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
data = this.backData.getData()

  constructor(private backData:BackService) { 

  }

  ngOnInit(): void {
  }

}
