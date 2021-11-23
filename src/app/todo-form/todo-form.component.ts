import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todoItem';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  newTodoText: string = '';
  @Output() addItem = new EventEmitter();
  date = new Date()
  constructor() {}

  ngOnInit(): void {}
  onAdd() {
    if (this.newTodoText) {
      const newTodoItem = {
        id: Date.now(),
        name: this.newTodoText,
        completed: false,
        date:this.date.toUTCString()
      };
      

      this.addItem.emit(newTodoItem);
      this.newTodoText = '';
    }
  }
}
