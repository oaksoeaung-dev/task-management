import {Component, computed, input, output} from '@angular/core';
import {User} from '../../../types/user.type';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) user!: User;
  user = input.required<User>();
  imagePath = computed(() => 'assets/images/users/' + this.user().avatar)
  // @Output() select = new EventEmitter();
  select = output<string>();

  onSelectUser = () => {
    this.select.emit(this.user().id);
  }
}
