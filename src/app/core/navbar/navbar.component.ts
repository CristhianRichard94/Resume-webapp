import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

@Component({
  standalone: false,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  smMenu = false;
  @ViewChild('menuTrigger', { read: ElementRef }) menuTrigger!: ElementRef<HTMLButtonElement>;
  @ViewChild('closeMenuButton', { read: ElementRef }) closeMenuButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('smMenuPanel', { read: ElementRef }) smMenuPanel!: ElementRef<HTMLElement>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.smMenu = !this.smMenu;
    if (this.smMenu) {
      // Move focus into the panel once it's visible.
      setTimeout(() => this.closeMenuButton?.nativeElement?.focus());
    }
  }

  closeMenu(returnFocus = true): void {
    if (!this.smMenu) {
      return;
    }
    this.smMenu = false;
    if (returnFocus) {
      this.menuTrigger?.nativeElement?.focus();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('document:keydown', ['$event'])
  onTab(event: KeyboardEvent): void {
    if (event.key !== 'Tab' || !this.smMenu || !this.smMenuPanel) {
      return;
    }

    const focusable = Array.from(
      this.smMenuPanel.nativeElement.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    ).filter(el => el.offsetParent !== null);

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey) {
      if (active === first || !this.smMenuPanel.nativeElement.contains(active)) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (active === last || !this.smMenuPanel.nativeElement.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    }
  }

}
