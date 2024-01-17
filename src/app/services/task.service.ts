import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //   createTask: EventEmitter<string> = new EventEmitter<string>();
  // instead of creating event mitter we can use subject in rxjs

  createTask = new Subject<string>();

  onCreateTask(val: string) {
    this.createTask.next(val);
    console.log('hello');
  }
}
