import { Component, Input, inject } from '@angular/core';

import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: false,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required: true}) task!: Task; 
private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }  
}
