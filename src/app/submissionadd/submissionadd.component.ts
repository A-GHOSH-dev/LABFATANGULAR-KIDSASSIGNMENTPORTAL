import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Submits } from '../Submits';

@Component({
  selector: 'app-submissionadd',
  templateUrl: './submissionadd.component.html',
  styleUrls: ['./submissionadd.component.css']
})
export class SubmissionaddComponent implements OnInit {
  subject: string;
  code: string;
  title: string;
  desc: string;
  datesu: string;

  @Output() todoAdd: EventEmitter<Submits> = new EventEmitter();
  
    
    constructor() { }
  
    ngOnInit(): void {
    }
    onSubmit(){
      const todo = {
        slno: 8,
        subject: this.subject,
        code: this.code,
        title: this.title,
        desc: this.desc,
        datesu: this.datesu,
        active: true
      }
      this.todoAdd.emit(todo);
    }

}
