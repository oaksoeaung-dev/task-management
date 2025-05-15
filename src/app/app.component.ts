import {Component, signal} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {UserComponent} from './components/user/user.component';
import {USERS} from '../data/users';
import {TasksComponent} from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = USERS;

  selectedUserName = signal<string | undefined>(undefined);

  onSelectUser = (id: string) => {
    this.selectedUserName.set(this.users.find(user => user.id === id)?.name);
  }
}
