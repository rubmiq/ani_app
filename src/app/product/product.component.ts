import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackService } from '../back/back.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productId = this.route.snapshot.paramMap.get("productId");
data = this.back.data;
//@ts-ignore
selectedProduct = this.data.filter(el=>el.id == this.productId)
images = this.selectedProduct[0].img
  constructor(private route:ActivatedRoute, private back:BackService) {
    // console.log(this.images);
    
  }
  
  ngOnInit(): void {
  }
  
}
