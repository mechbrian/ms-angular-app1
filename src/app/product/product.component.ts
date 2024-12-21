import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Product {
  id: string;
  name: string;
  description: string;
  featureList: ProductFeatures[];
  price: number;
  imageUrl: string;
}

export interface ProductFeatures {
  title: string;
  features: string[];
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
  checkId: string | undefined; // Error message to display
  checkName: string | undefined; // Error message to display

  // Sample product data (In real applications, fetch from a service)
  products: Product[] = [
    {
      id: "pnplus",
      name: 'Luclane PN+',
      description: 'The new generation of Polynucleotide(PN) cosmetics for professionals is now available in Canada🇨🇦',
      featureList: [
        { title: 'WHY YOU SHOULD CHOOSE Luclane PN+',
          features: ['Immediate results','Restores damaged skin','Brightens the under-eye area','Less invasive treatment','Improves the density and quality of the skin','Rejuvenates and plumps the area']},
          { title: 'BENEFITS OF Mscience Luclane PN+',
            features: ['Brightening and skin rejuvenation','Forming a healthy skin barrier','Improvement of skin elasticity']}
      ],
      price: -1,
      imageUrl: 'assets/pnplus01.png'
    },
    // Add more products as needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to the route params to fetch the product when the route changes
    this.route.params.subscribe(params => {
      this.errorMsg = "inside ngOnInit";
      this.checkId = String(params['id']);
      const id = String(params['id']);      
      this.product = this.products.find(product => product.id === id);
      this.checkName = this.product?.name;
      console.log('Loaded product:', this.product); // Debugging log
    });
  }

}
