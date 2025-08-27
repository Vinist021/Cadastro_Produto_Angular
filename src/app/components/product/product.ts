import { Component, Input} from '@angular/core';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  @Input()
  categories: Category[] = [];

}
