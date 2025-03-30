import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { GoalListComponent } from './pages/goal-list/goal-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'goals',
        component: GoalListComponent
    },
    {
        path: 'tasks',
        component: TaskListComponent
    },
    {
        path: 'reminders',
        component: RemindersComponent
    }
];
