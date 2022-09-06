import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from './core/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todoList?: any[]

  constructor(private toDoService: ToDoService) {

  }
  
  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.toDoService.getToDoList().subscribe({
      next: ((value) => {
        this.todoList = value;
      })
    });
  }
  
}
