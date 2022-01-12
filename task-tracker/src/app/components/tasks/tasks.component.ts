import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  toggleTask(task: ITask) {
    task.reminder = !task.reminder
    this.taskService.toggleTask(task).subscribe()
  }

  addTask(event: ITask) {
    this.taskService.addTask(event).subscribe((tasks) => this.tasks.push(tasks))
  }

}
