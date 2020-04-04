import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Detail } from '../detail';
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newQuote = new Detail(0,"","", "",new Date(), 0, 0);

  @Output() addQuote = new EventEmitter<Detail>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    // this.Quote.resetForm();
      }
    
  constructor() { }

  ngOnInit(): void {
  }

}

 

