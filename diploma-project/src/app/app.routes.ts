import { Routes } from '@angular/router';
import { LayoutComponent } from "./core/layout/layout.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadChildren: () => import("./features/dashboard/dashboard.routes")
          .then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: "tasks",
        loadChildren: () => import("./features/tasks/tasks.routes")
          .then(m => m.TASKS_ROUTES)
      },
      {
        path: "profile",
        loadChildren: () => import("./features/profile/profile.routes")
          .then(m => m.PROFILE_ROUTES)
      }
    ]
  }
];
