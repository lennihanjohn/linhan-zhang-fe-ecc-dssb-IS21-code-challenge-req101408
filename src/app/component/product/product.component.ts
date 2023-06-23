import { Component } from '@angular/core';
import {ProductService} from '../../share/service/product-service.service';
import {Product} from '../../share/model/product.model';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products$!: Observable<Product[]>;
  product!: Product;

  constructor(private ps: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.ps.getList()
    this.products$ = this.ps.getList$
  }

  editProduct(product: Product) {
    this.router.navigate(["edit", product.productId]);
  }

  deleteProduct(product: Product) {
    this.ps.delete(product).subscribe({
      next: (data) => {
        // retrive the list on delete
        this.ps.getList()
      },
      error: (e) => console.error(e)
    });
  }

  addProduct(){
    this.router.navigate(["add"]);
  }

  openLink(url: string){
    window.open(url, "_blank");
  }

  locationName(url: string){
    return url.split('bcgov/')[1]
  }
  
}
