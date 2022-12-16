import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../services/task.service';
import { Task } from '../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private TaskService: TaskService) { }

  deleteTask(task: Task) {
    if (confirm("Deseja mesmo Apagar o registo: " + task.id + " ?")) {
      this.TaskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
    }
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.TaskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.TaskService.addTask(task).subscribe((task) => (this.tasks.push(task)))
  }

  ngOnInit() {
    this.TaskService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks);
  }
}
