import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUsersId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUsersId);
  }

  onSelectUser(id: string) {
    this.selectedUsersId = id;
  }
}
