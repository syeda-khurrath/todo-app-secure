import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css'],
})
export class TodoDisplayComponent implements OnInit {
  @Input() todoList: any = [];
  click = false

  constructor() {}

  ngOnInit(): void {}

  addLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  delete(item: any) {
    this.click = !this.click
    let idx = this.todoList.indexOf(item);
    this.todoList.splice(idx, 1);
    this.addLocalStorage();

  }
  change(item: any) {
    item.completed = !item.completed;
    this.addLocalStorage();
  }
}
