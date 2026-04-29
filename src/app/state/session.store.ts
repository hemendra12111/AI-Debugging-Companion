import { signal } from '@angular/core';

export const sessionStore = {
  lastCode: signal(localStorage.getItem('lastCode') || ''),
  debugHistory: signal(JSON.parse(localStorage.getItem('debugHistory') || '[]')),
  explanation: signal(null as any)
};