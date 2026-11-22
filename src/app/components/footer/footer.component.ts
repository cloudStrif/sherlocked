import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIRBUZZ_CONTACT } from '../../data/airbuzz.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public readonly contact = AIRBUZZ_CONTACT;
  public readonly currentYear = new Date().getFullYear();
}
