import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  categories: Category[] = [
    {id: 1, name: 'Produção própria'},
    {id: 2, name: 'Nacional'},
    {id: 3, name: 'Importado'},
    {id: 4, name: 'Premium'}
  ];

  product: Product = {} as Product;

}
