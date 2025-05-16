import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  title = signal('');
  summary = signal('');
  dueDate = signal('');
  @Output() cancle = new EventEmitter<void>();

  @Output() add = new EventEmitter<{ title: string, summary: string, dueDate: string }>();

  onCancle() {
    this.cancle.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate()
    })
  }
}
