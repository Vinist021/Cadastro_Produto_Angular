import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit{

  categories: Category[] = [];

  product: Product = {} as Product;
  products: Product[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.products = this.productService.getProdutcts();
  }

  saveProduct() {
    this.productService.save(this.product);
    this.product = {} as Product;
  }

}
