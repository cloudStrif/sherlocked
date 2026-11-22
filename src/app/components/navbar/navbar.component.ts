import { Component, signal, WritableSignal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIRBUZZ_CONTACT } from '../../data/airbuzz.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public readonly contact = AIRBUZZ_CONTACT;
  public readonly isScrolled: WritableSignal<boolean> = signal(false);
  public readonly isMobileMenuOpen: WritableSignal<boolean> = signal(false);

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
