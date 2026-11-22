import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { REGULATION_SCENARIOS, AIRBUZZ_CONTACT } from '../../data/airbuzz.data';

@Component({
  selector: 'app-regulations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regulations.component.html'
})
export class RegulationsComponent {
  public readonly scenarios = REGULATION_SCENARIOS;
  public readonly contact = AIRBUZZ_CONTACT;
}
