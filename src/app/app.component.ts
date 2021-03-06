import { Component,OnInit } from '@angular/core';
import {Detail} from './detail'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  goals:Detail[] = [
    new Detail(1,'\“You\’re off to great places, today is your day. Your mountain is waiting, so get on your way.\”','Dr. Seuss',"Ali",new Date(2020,2,4),0,0),
    new Detail(2,'\“You always pass failure on the way to success.\”','Mickey Rooney', "Ali",new Date(2020,1,14),0,0),
    new Detail(3,'\“Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.\”' , 'Wolfgang Riebe', "Ali",new Date(2020,2,14),0,0),
    new Detail(4,'“The only time you fail is when you fall down and stay down."' , 'Stephen Richards', "Ali",new Date(2020,2,14),0,0),
    new Detail(5,'“Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.”', 'Lou Holtz', "Ali",new Date(2020,2,4),0,0),
    new Detail(6,'“The way I see it, if you want the rainbow, you gotta put up with the rain.”', 'Dolly Parton', "Ali",new Date(2020,3,30),0,0),
  ];
  addNewQuote(Detail){
    let quoteLength = this.goals.length;
  Detail.id = quoteLength+1;
    Detail.postingDate= new Date()
    
    if (Detail.author === ''|| Detail.author === '' || Detail.blogger === ''){
      alert('all fields are required!')
    }else{
      alert('Your Quote has been added Successfully')
    this.goals.push(Detail);
    
  }
  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete this Quote?`)
  
        if (toDelete){
          this.goals.splice(index,1)
        }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
 
