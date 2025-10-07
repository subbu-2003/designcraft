import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgIf, CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
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
