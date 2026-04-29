import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeAnalysisService {
  private backendUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  analyzeCode(code: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/analyze-code`, { code });
  }

  simulateFlow(code: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/simulate-flow`, { code });
  }

  suggestFix(code: string, bug: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/suggest-fix`, { code, bug });
  }
}