import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackService } from '../back/back.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

categories = {
  external: 0,
  internal: 1,
  other: 2,
}
categoryId = this.rout.snapshot.paramMap.get('category')
//@ts-ignore
data = this.categoryId ? this.dataBase.data.filter(el=>el.category == this.categories[this.categoryId]) : this.dataBase.data;


constructor(public dataBase:BackService, private rout: ActivatedRoute,private router: Router) { 
  router.events.subscribe((val) => {
    this.categoryId = this.rout.snapshot.paramMap.get('category');
    //@ts-ignore
    this.data = this.categoryId ? this.dataBase.data.filter(el=>el.category == this.categories[this.categoryId]) : this.dataBase.data;

});
}

  ngOnInit(): void {
  }


}
