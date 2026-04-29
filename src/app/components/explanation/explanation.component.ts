import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explanation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="explanation(); else noExplanation">
      <h3>{{explanation().bug}}</h3>
      <p><strong>Root Cause:</strong> {{explanation().rootCause}}</p>
      <p><strong>Fix Suggestion:</strong> {{explanation().fixSuggestion}}</p>
      <p><strong>Confidence:</strong> {{explanation().confidence}}</p>
    </div>
    <ng-template #noExplanation>
      <p>No bugs detected or analysis in progress...</p>
    </ng-template>
  `,
  styles: [`
    h3 { color: red; }
    strong { color: #333; }
  `]
})
export class ExplanationComponent {
  explanation = input<any>();
}