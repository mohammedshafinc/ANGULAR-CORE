import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
})
export class NewtaskComponent {
  newTask: string = '';
  constructor(private taskservice: TaskService) {
    console.log(taskservice);
  }

  getdata() {
    console.log(this.newTask);
    this.taskservice.onCreateTask(this.newTask);
  }
}
