import {Component, computed, input, signal} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {TASKS} from '../../../data/tasks';
import {Task} from '../../../models/task.model';
import {NewTaskComponent} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = signal<Task[]>(TASKS);
  isAddingTask = false;

  userName = input.required<string>();

  userId = input.required<string>();

  selectedUserTasks = computed<Task[]>(() => this.tasks().filter(task => task.userId === this.userId()))

  onCompleteTask(id: string) {
    this.tasks.update(prev => prev.filter(task => task.id !== id));
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancleAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: { title: string, summary: string, dueDate: string }) {
    this.tasks.update(prev => [...prev, {
      id: new Date().getTime().toString(),
      userId: this.userId(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    }])
    this.isAddingTask = false;
  }
}
