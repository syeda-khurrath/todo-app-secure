import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'todo-list';
  todoList: TodoItem[] = [];

  ngOnInit() {
    const reference = localStorage.getItem('todos');
    if (reference) {
      this.todoList = JSON.parse(reference);
    }
  }

  addItem(newTodoItem: any) {

    this.todoList.push(newTodoItem);

    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}
