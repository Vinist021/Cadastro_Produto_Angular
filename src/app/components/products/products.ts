import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  categories: Category[] = [
    {id: 1, name: 'Produção própria'},
    {id: 2, name: 'Nacional'},
    {id: 3, name: 'Importado'},
    {id: 4, name: 'Premium'}
  ];

}
