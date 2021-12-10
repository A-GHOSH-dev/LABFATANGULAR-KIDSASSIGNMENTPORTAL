import { Component, OnInit } from '@angular/core';
import { Submits } from '../Submits';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  localItem: string | null; //for saving data
  todos:Submits[]; //make array

  constructor() { //make array to put data
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
       
    this.todos = [];
    }
   else{
     this.todos=JSON.parse(this.localItem);
   }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo: Submits){
    console.log(todo);
    //properly delete from array of js using splice method
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  //add TODO
  addTodo(todo: Submits){
    console.log(todo);
    //properly add to array of js using push method
    
    this.todos.push(todo);
    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ToggleTodo(todo: Submits){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;

    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }


}
