import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.productList$;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll();
  }
  deleteItem(product: Product): void {
    this.productService.remove(product).subscribe(
      () => {
        this.productService.getAll();
      }
    );
  }

}
