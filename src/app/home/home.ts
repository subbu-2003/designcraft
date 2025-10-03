import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 stories = [
    {
      category: 'Shopping',
      title: 'MasterCard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      tags: ['UI/UX', 'React', 'Express'],
      image: 'assets/images/mastercard.jpg'
    },
    {
      category: 'Shopping',
      title: 'IBM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      tags: ['UI/UX', 'Website', 'React'],
      image: 'assets/images/ibm.jpg'
    },
    {
      category: 'Shopping',
      title: 'Apple',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      tags: ['UI/UX', 'React Native', 'Mobile App'],
      image: 'assets/images/apple.jpg'
    }
  ];

  blogs = [
  {
    category: 'React',
    date: 'Sep-05-2024',
    image: 'assets/images/blog1.jpg',
    title: 'Start a blog to reach your creative peak',
    description: 'Aliquam pulvinar vestibulum blandit. Donec sed nisi libero. Fusce dignissim luctus sem eu dapibus.'
  },
  {
    category: 'React',
    date: 'Sep-05-2024',
    image: 'assets/images/blog2.jpg',
    title: 'How to optimize images in WordPress for faster loading (complete guide)',
    description: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque.'
  },
  {
    category: 'React',
    date: 'Sep-05-2024',
    image: 'assets/images/blog3.jpg',
    title: 'How to build a loyal community online and offline',
    description: 'In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc.'
  }
];
}
