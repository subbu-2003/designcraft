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

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.clients.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.clients.length) % this.clients.length;
  }
}
