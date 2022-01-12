import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ITask } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: ITask;
  faTimes = faTimes
  @Output() onDeleteTask:EventEmitter<ITask>=new EventEmitter
  @Output() onToggleTask:EventEmitter<ITask>=new EventEmitter
  constructor() {
    this.task = {
      id: 0,
      text: "",
      day: "",
      reminder: true
    }
  }

  ngOnInit(): void {
  }

  onDelete(task:ITask){
   this.onDeleteTask.emit(task)
  }

  onToggle(task:ITask){
    this.onToggleTask.emit(task)
  }
}
