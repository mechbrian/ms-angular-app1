import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product: Product | undefined; // Single product to display
  errorMsg: string | undefined; // Error message to display
  checkId: number | undefined; // Error message to display
  checkName: string | undefined; // Error message to display
  // Sample product data (In real applications, fetch from a service)
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 29.99,
      imageUrl: 'assets/product1.jpg'
    },
    // Add more products as needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to the route params to fetch the product when the route changes
    this.route.params.subscribe(params => {
      this.errorMsg = "inside ngOnInit";
      this.checkId = Number(params['id']);
      const id = Number(params['id']);
      this.product = this.products.find(product => product.id === id);
      this.checkName = this.product?.name;
    });
  }

}
