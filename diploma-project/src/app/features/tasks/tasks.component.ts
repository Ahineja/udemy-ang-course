import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="tasks">
      <header class="tasks-header">
        <h2>Your Tasks 📝</h2>
        <p class="subtitle">Manage your tasks efficiently</p>
      </header>

      <div class="tasks-grid">
        <div class="tasks-card">
          <h3>In Progress 🚀</h3>
          <ul class="tasks-list">
            <li class="task-item">
              <span class="task-title">Update documentation</span>
              <span class="task-due">Due today</span>
            </li>
            <li class="task-item">
              <span class="task-title">Review pull request</span>
              <span class="task-due">Due tomorrow</span>
            </li>
          </ul>
        </div>

        <div class="tasks-card">
          <h3>Completed ✅</h3>
          <ul class="tasks-list">
            <li class="task-item completed">
              <span class="task-title">Setup project structure</span>
              <span class="task-due">Completed yesterday</span>
            </li>
            <li class="task-item completed">
              <span class="task-title">Initial commit</span>
              <span class="task-due">Completed 2 days ago</span>
            </li>
          </ul>
        </div>

        <div class="tasks-card">
          <h3>Add New Task ➕</h3>
          <form class="task-form">
            <input type="text" placeholder="Task title" class="task-input" />
            <input type="date" class="task-input" />
            <button type="submit" class="task-submit">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent {}
