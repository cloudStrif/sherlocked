import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIRBUZZ_CONTACT } from '../../data/airbuzz.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public readonly contact = AIRBUZZ_CONTACT;
}
