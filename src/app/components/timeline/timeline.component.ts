import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sessionStore } from '../../state/session.store';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let step of executionSteps(); let i = index" class="step">
      <span class="line-number">{{i + 1}}:</span> {{step}}
    </div>
  `,
  styles: [`
    .step { margin: 5px 0; }
    .line-number { font-weight: bold; color: blue; }
  `]
})
export class TimelineComponent {
  executionSteps = computed(() => {
    const explanation = sessionStore.explanation();
    return explanation?.executionFlow ? explanation.executionFlow.split('\n') : [];
  });
}