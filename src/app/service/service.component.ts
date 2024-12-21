import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  id: string;
  name: string;
  description: string;
  featureList: ServiceFeatures[];
  imageUrl: string;
}

export interface ServiceFeatures {
  title: string;
  features: string[];
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent implements OnInit {
  
  service: Service| undefined; // Single product to display

  services: Service[] = [
    {
      id: 'training',
      name: 'PROFESSIONAL AESTHETICS TRAINING',
      description: '',
      featureList: [
        {
          title: '24 HOURS EDUCATION',
          features: [
            'Sales Skills',
            'Aesthetics Consultation',
            'Skin Layers & Common Ingredients',
            'Exercise and Skin',
            'Sleep Medicine and Skin',
            'Nutrition and Skin',
            'Immunity and Inflammation',
            'Professional Skincare',
            'Chemical Peels',
            'Microneedling & Meso',
            'Korean Aqua Peels',
            'Ultrasound and Radiofrequency',
            'Laser Treatments',
          ],
        },
        {
          title: '16 HOURS PRACTICE',
          features: [
            'Practical Facial Techniques',
            'Customization Workshop',
            'New Generation Treatment',
          ],
        },
      ],
      imageUrl: 'assets/training01.jpg',
    },
    // Add more products as needed
  ];

  ngOnInit() {
    this.service = this.services[0];
    console.log('Loaded service:', this.service); // Debugging log
  }
}
