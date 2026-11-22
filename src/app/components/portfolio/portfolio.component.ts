import { Component, computed, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/airbuzz.data';
import { PortfolioItem } from '../../models/airbuzz.model';

type CategoryFilter = 'all' | 'cinema' | 'pub' | 'fpv' | 'broadcast';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {
  public readonly portfolioItems = PORTFOLIO_DATA;
  public readonly activeFilter: WritableSignal<CategoryFilter> = signal('all');

  public readonly filteredItems = computed(() => {
    const current = this.activeFilter();
    if (current === 'all') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter((item) => item.category === current);
  });

  public readonly selectedItem: WritableSignal<PortfolioItem | null> = signal(null);

  public setFilter(filter: CategoryFilter): void {
    this.activeFilter.set(filter);
  }

  public openProject(item: PortfolioItem): void {
    this.selectedItem.set(item);
  }

  public closeProject(): void {
    this.selectedItem.set(null);
  }
}
