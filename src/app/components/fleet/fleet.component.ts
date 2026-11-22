import { Component, computed, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FLEET_DATA } from '../../data/airbuzz.data';

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleet.component.html'
})
export class FleetComponent {
  public readonly fleet = FLEET_DATA;
  public readonly selectedId: WritableSignal<string> = signal(FLEET_DATA[0].id);

  public readonly activeDrone = computed(() => {
    return this.fleet.find((d) => d.id === this.selectedId()) || this.fleet[0];
  });

  public selectDrone(id: string): void {
    this.selectedId.set(id);
  }
}
