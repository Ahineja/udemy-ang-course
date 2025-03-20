import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="app-layout">
      <header class="app-header">
        <div class="container">
          <div class="logo-section">
            <img src="/assets/icons/crow-downhead-to-right.svg" alt="Crow Logo" class="app-logo" />
            <h1>Diploma Project</h1>
          </div>
          <nav class="main-nav">
            <ul>
              <li><a routerLink="/dashboard" class="nav-link">Dashboard</a></li>
              <li><a routerLink="/tasks" class="nav-link">Tasks</a></li>
              <li><a routerLink="/profile" class="nav-link">Profile</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main class="app-main">
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </main>
      <footer class="app-footer">
        <div class="container">
          <p>© 2024 Diploma Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent {}
