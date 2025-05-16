import {Component, signal} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {UserComponent} from './components/user/user.component';
import {USERS} from '../data/users';
import {TasksComponent} from './components/tasks/tasks.component';
import {User} from '../models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = USERS;

  selectedUser = signal<User | null>(null);

  onSelectUser = (id: string) => {
    const user = this.users.find(user => user.id === id);
    this.selectedUser.set(user ?? null);
  }
}
