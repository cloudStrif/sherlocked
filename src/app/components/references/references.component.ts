import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLIENT_REFERENCES } from '../../data/airbuzz.data';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html'
})
export class ReferencesComponent {
  public readonly references = CLIENT_REFERENCES;
}
