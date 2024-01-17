import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css'],
})
export class ShowtaskComponent implements OnInit {
  tasks: string[] = ['task1', 'task2', 'task3'];

  constructor(private taskservice: TaskService) {}

  ngOnInit(): void {
    this.taskservice.createTask.subscribe((val) => {
      this.tasks.push(val);
    });
  }
}
