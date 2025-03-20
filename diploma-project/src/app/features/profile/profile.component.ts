import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile">
      <header class="profile-header">
        <h2>Your Profile 👤</h2>
        <p class="subtitle">Manage your personal information</p>
      </header>

      <div class="profile-grid">
        <div class="profile-card">
          <h3>Personal Information 📋</h3>
          <form class="profile-form">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" value="John Doe" class="profile-input" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" value="john.doe@example.com" class="profile-input" />
            </div>
            <div class="form-group">
              <label>Role</label>
              <input type="text" value="Software Developer" class="profile-input" />
            </div>
            <button type="submit" class="profile-submit">Save Changes</button>
          </form>
        </div>

        <div class="profile-card">
          <h3>Statistics 📊</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-value">42</span>
              <span class="stat-label">Total Tasks</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">28</span>
              <span class="stat-label">Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">95%</span>
              <span class="stat-label">On Time</span>
            </div>
          </div>
        </div>

        <div class="profile-card">
          <h3>Preferences ⚙️</h3>
          <div class="preferences-list">
            <div class="preference-item">
              <label class="toggle">
                <input type="checkbox" checked />
                <span class="toggle-slider"></span>
                Email Notifications
              </label>
            </div>
            <div class="preference-item">
              <label class="toggle">
                <input type="checkbox" checked />
                <span class="toggle-slider"></span>
                Dark Mode
              </label>
            </div>
            <div class="preference-item">
              <label class="toggle">
                <input type="checkbox" />
                <span class="toggle-slider"></span>
                Weekly Reports
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent {}
