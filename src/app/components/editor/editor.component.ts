import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeAnalysisService } from '../../services/code-analysis.service';
import { sessionStore } from '../../state/session.store';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div id="editor-container">
      <textarea 
        [(ngModel)]="code"
        (change)="onCodeChange()"
        placeholder="Paste your code here (JavaScript/TypeScript/Java)..."
        class="code-textarea">
      </textarea>
    </div>
  `,
  styles: [`
    #editor-container { height: 100%; display: flex; flex-direction: column; }
    .code-textarea { 
      height: 400px; 
      border: 1px solid #ccc; 
      padding: 10px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      flex: 1;
    }
  `]
})
export class EditorComponent implements OnInit {
  private codeAnalysisService = inject(CodeAnalysisService);
  private debounceTimer: any;
  code = sessionStore.lastCode();

  ngOnInit() {
    // Load saved code from localStorage
    const saved = localStorage.getItem('lastCode');
    if (saved) {
      this.code = saved;
    }
  }

  onCodeChange() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      sessionStore.lastCode.set(this.code);
      localStorage.setItem('lastCode', this.code);
      this.analyzeCode(this.code);
    }, 500);
  }

  private analyzeCode(code: string) {
    if (!code.trim()) return;
    
    this.codeAnalysisService.analyzeCode(code).subscribe({
      next: (result) => {
        sessionStore.explanation.set(result);
        sessionStore.debugHistory.update(history => [...history, result]);
        localStorage.setItem('debugHistory', JSON.stringify(sessionStore.debugHistory()));
      },
      error: (err) => console.error('Analysis failed', err)
    });
  }
}