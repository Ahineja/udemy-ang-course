import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <h2>Welcome to Your Dashboard 👋</h2>
        <p class="subtitle">Here's your overview for today</p>
      </header>

      <div class="dashboard-grid">
        <div class="dashboard-card">
          <h3>Tasks Overview 📋</h3>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-value">12</span>
              <span class="stat-label">Total Tasks</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">5</span>
              <span class="stat-label">In Progress</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">7</span>
              <span class="stat-label">Completed</span>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <h3>Recent Activity 🔔</h3>
          <ul class="activity-list">
            <li>Task "Update Documentation" was completed</li>
            <li>New task "Review Pull Request" was added</li>
            <li>Task "Fix Navigation Bug" was started</li>
          </ul>
        </div>

        <div class="dashboard-card">
          <h3>Quick Actions ⚡</h3>
          <div class="quick-actions">
            <button class="action-btn">Create Task</button>
            <button class="action-btn">View Reports</button>
            <button class="action-btn">Team Chat</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {}
