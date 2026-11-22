import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIRBUZZ_CONTACT, STATS_HIGHLIGHTS } from '../../data/airbuzz.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  public readonly contact = AIRBUZZ_CONTACT;
  public readonly stats = STATS_HIGHLIGHTS;
}
