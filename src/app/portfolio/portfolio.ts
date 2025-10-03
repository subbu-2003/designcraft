import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  tagColor: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  
projects: Project[] = [
    {
      id: 1,
      title: 'Iragu Foundation - Serve handwriting training for the students',
      shortDesc:
        'Build a website for their services with the reliability, good looking webpage and admin dashboard.',
      fullDesc:
        'Iragu Foundation is a non-profit educational initiative dedicated to improving students handwriting and presentation skills...',
      image: 'assets/images/bg_1.jpg',
      tag: 'Web Development',
      tagColor: 'bg-purple-600',
    },
    {
      id: 2,
      title: 'Genz Learnings - Serve clinical studies for the students',
      shortDesc:
        'Build a website for their services with the reliability, good looking webpage and admin dashboard.',
      fullDesc:
        'Genz Learnings provides clinical study services with reliable tools, modern dashboards and better scalability...',
      image: 'assets/images/bg_1.jpg',
      tag: 'Web Development',
      tagColor: 'bg-pink-500',
    },
    {
      id: 3,
      title: 'ARF Academy - Serve handwriting, aeromodelling and soft classes',
      shortDesc:
        'Build an Android App for their services with scalability, strong protection frameworks and admin dashboard.',
      fullDesc:
        'ARF Academy focuses on handwriting, aeromodelling, and soft skills training, supported by Android app solutions...',
      image: 'assets/images/bg_1.jpg',
      tag: 'Mobile App Development',
      tagColor: 'bg-green-500',
    },
    {
      id: 4,
      title: 'Freshly Store - Ecommerce platform for selling fresh products',
      shortDesc:
        'Build a mobile application for their service with reliability, stock management and admin dashboard.',
      fullDesc:
        'Freshly Store is an ecommerce platform that delivers fresh groceries online with inventory tracking, smooth UI and admin dashboard...',
      image: 'assets/images/bg_1.jpg',
      tag: 'Mobile App Development',
      tagColor: 'bg-blue-500',
    },
    {
      id: 5,
      title: 'Solvify - E-learning Platform for the NEET aspirants',
      shortDesc:
        'Manage social media pages for NEET aspirants daily stats and tools, to keep in the trend.',
      fullDesc:
        'Solvify offers E-learning platform for NEET aspirants with social media integration, question banks, mock tests and detailed analytics...',
      image: 'assets/images/bg_1.jpg',
      tag: 'Social Media Manager',
      tagColor: 'bg-red-500',
    },
    {
      id: 6,
      title: 'Rufink - School of communication and soft skills',
      shortDesc:
        'Build a frontend design in Rufink for their multi-purpose work with creative graphic designs.',
      fullDesc:
        'Rufink trains communication & soft skills, supported with custom web design, graphic elements, and a strong online presence...',
      image: 'assets/images/bg_1.jpg',
      tag: 'Graphic Design',
      tagColor: 'bg-orange-500',
    },
  ];

  selectedProject: Project | null = null;

  showProject(project: Project) {
    this.selectedProject = project;
    window.scrollTo({ top: 380, behavior: 'smooth' });
  }

  closeProject() {
    this.selectedProject = null;
  }
}
