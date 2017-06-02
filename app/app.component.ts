import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My Meal Tracker</h1>
    <div *ngFor="let currentTask of tasks">
      <h3 >{{ currentTask.description }}</h3>
      <button (click)="showDetails(currentTask)" >Edit</button>
    </div>
    <div *ngIf="selectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter The Details:</label>
        <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
        <label>calories:</label>
        <input [(ngModel)]="selectedTask.id">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
      new Task("Humbuger.", 0),
      new Task("Roasted me.", 1),
      new Task("Fries.", 2),
      new Task("Chicken Burger.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task){
    this.selectedTask = clickedTask;
  }
  finishedEditing(){
    this.selectedTask = null;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
