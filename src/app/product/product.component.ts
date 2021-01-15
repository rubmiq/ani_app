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

  constructor(private route:ActivatedRoute, private data:BackService) { 
    console.log(this.productId);
    
  }

  ngOnInit(): void {
  }

}
