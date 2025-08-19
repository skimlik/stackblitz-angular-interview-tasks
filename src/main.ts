import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a routerLink="/">
      Home
    </a>
    <div class="tasks-nav">
      <button routerLink="/task1">Task #1</button>
    </div>
    <p>
    <router-outlet></router-outlet>
    </p>
  `,
  styles: ['.tasks-nav { margin: 1em 0; display: flex, justify-content: flex-start; gap: 1em;}'],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig);
