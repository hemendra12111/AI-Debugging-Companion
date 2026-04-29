import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { VariableTrackerComponent } from './components/variable-tracker/variable-tracker.component';
import { sessionStore } from './state/session.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EditorComponent, TimelineComponent, ExplanationComponent, VariableTrackerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AI Debugging Companion';
  sessionStore = sessionStore;
}