import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Submits } from '../Submits';

@Component({
  selector: 'app-submissions-display',
  templateUrl: './submissions-display.component.html',
  styleUrls: ['./submissions-display.component.css']
})
export class SubmissionsDisplayComponent implements OnInit {
 //input parent to child
 @Input() todo: Submits;
 //event emitter for deleting action- child to parent
 @Output() todoDelete: EventEmitter<Submits> = new EventEmitter();
 @Output() todoCheckbox: EventEmitter<Submits> = new EventEmitter();

 constructor() { }

 ngOnInit(): void {
 }
 onClick(todo: Submits){
   this.todoDelete.emit(todo);
   console.log("onClick has been triggered")
 }
 onCheckboxClick(todo: any){
   this.todoCheckbox.emit(todo);
 }


}
