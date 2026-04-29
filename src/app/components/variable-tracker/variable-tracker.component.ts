import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sessionStore } from '../../state/session.store';

@Component({
  selector: 'app-variable-tracker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let variable of variables()">
      <strong>{{variable.name}}:</strong> {{variable.value}}
    </div>
  `,
  styles: [`
    div { margin: 5px 0; }
  `]
})
export class VariableTrackerComponent {
  // Placeholder: In a real implementation, parse variables from execution flow
  variables = computed(() => {
    // Mock variables for demo
    return [
      { name: 'x', value: '0' },
      { name: 'loop', value: 'infinite' }
    ];
  });
}