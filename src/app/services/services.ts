import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
Math = Math; // <-- add this


   currentIndex = 0;

  clients = [
    {
      name: 'Sanjit CEO',
      designation: 'LUNAREX SOLUTION',
      feedback:
        'Custom websites and web applications built with modern technologies for optimal performance and ultimate user experience...',
      logo: 'assets/images/client.png', // empty → fallback profile image
      rating: 4.5,
    },
    {
      name: 'Priya Sharma',
      designation: 'TechNova Pvt Ltd',
      feedback:
        'Their mobile app development service transformed our business. Excellent UI and smooth performance!',
      logo: 'assets/images/client.png',
      rating: 5,
    },
    {
      name: 'Michael Lee',
      designation: 'Global Media Inc',
      feedback:
        'Great team, great support, and innovative solutions. They truly care about client success!',
      logo: 'assets/images/client.png',
      rating: 4,
    },
  ];

   services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['SEO Optimized', 'Fast Loading', 'Secure & Scalable', 'Well Maintenance'],
      image: 'assets/images/1.png'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'User-Friendly', 'App Store Ready', 'Well Maintenance'],
      image: 'assets/images/2.png'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences and strengthen your brand identity.',
      features: ['Wireframing', 'Prototyping', 'Responsive Design', 'User-Centered Design'],
      image: 'assets/images/3.png'
    },
    {
      title: 'IoT Automation',
      description: 'Smart automation solutions that connect devices and streamline processes for efficiency.',
      features: ['Sensor Devices', 'Process Automation', 'Data Analytics', 'Remote Monitoring'],
      image: 'assets/images/4.png'
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social campaigns that build your online presence and engage your target audience.',
      features: ['Content Strategy', 'Analytics', 'SEO Integration', 'Client Focused'],
      image: 'assets/images/5.png'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Scalable online stores with secure checkout, product management, and modern shopping experience.',
      features: ['Custom Storefront', 'Secure Payments', 'Product Management', 'SEO Optimized'],
      image: 'assets/images/6.png'
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.clients.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.clients.length) % this.clients.length;
  }
}
