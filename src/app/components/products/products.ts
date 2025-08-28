import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category';

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

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  saveProduct() {
    this.product.id = this.products.length + 1;
    this.products.push(this.product);
    this.product = {} as Product;

    console.log("Novo produto cadastrado. Total produtos: " + this.products.length);
  }

}
