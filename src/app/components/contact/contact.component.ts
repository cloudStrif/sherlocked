import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AIRBUZZ_CONTACT } from '../../data/airbuzz.data';
import { ContactRequest } from '../../models/airbuzz.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  public readonly contact = AIRBUZZ_CONTACT;

  public formData: ContactRequest = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'cinema',
    location: 'Paris & Île-de-France',
    shootDate: '',
    message: ''
  };

  public isSubmitted: WritableSignal<boolean> = signal(false);
  public isSubmitting: WritableSignal<boolean> = signal(false);

  public onSubmit(): void {
    if (!this.formData.fullName || !this.formData.email) return;

    this.isSubmitting.set(true);

    // Simulation de traitement (envoi formulaire)
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 800);
  }

  public resetForm(): void {
    this.formData = {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceType: 'cinema',
      location: 'Paris & Île-de-France',
      shootDate: '',
      message: ''
    };
    this.isSubmitted.set(false);
  }
}
