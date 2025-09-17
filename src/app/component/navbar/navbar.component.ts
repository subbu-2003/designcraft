import { Component, HostListener } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf, CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router:Router){}

   goHome() {
    this.router.navigate(['']);
  }

  title = 'dctwebsvcs';

 menuOpen = false;
scrolled = false;

 @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }
}
