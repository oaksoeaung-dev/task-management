import {Component, computed, Input, input, output} from '@angular/core';
import {User} from '../../../models/user.model';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) user!: User;
  user = input.required<User>();

  imagePath = computed(() => 'assets/images/users/' + this.user().avatar)

  // @Output() select = new EventEmitter();
  select = output<string>();

  @Input({required: true}) selected!: boolean;

  onSelectUser = () => {
    this.select.emit(this.user().id);
  }
}
