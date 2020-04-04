import { Component,OnInit } from '@angular/core';
import {Detail} from './detail'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // goals:string[];

  // constructor(){
  //   this.goals = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
  // } 

  //  goals: Detail[] =  [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework',description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];
  // detail: Detail = {id:2, name:"mystring", description:"i have alt of arrays" }
  // goals: Detail[] = [
  //   new Detail(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
  //   new Detail(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
  //   new Detail(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
  //   new Detail(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
  //   new Detail(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
  //   new Detail(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  // ];
  // toggleDetails(index){
  //   this.goals[index].showDescription = !this.goals[index].showDescription;
  // }
  // completeGoal(isComplete, index){
  //   if (isComplete) {
  //     this.goals.splice(index,1);
  //   }
  // }
  // deleteGoal(isComplete, index){
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

  //     if (toDelete){
  //       this.goals.splice(index,1)
  //     }
  //   }
  // }
  goals:Detail[] = [
    new Detail(1,'\“You\’re off to great places, today is your day. Your mountain is waiting, so get on your way.\”','Dr. Seuss',"Martin",new Date(2020,2,4),0,0),
    new Detail(2,'\“You always pass failure on the way to success.\”','Mickey Rooney', "Martin",new Date(2020,1,14),0,0),
    new Detail(3,'\“Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.\”' , 'Wolfgang Riebe', "Martin",new Date(2020,2,14),0,0),
    new Detail(4,'“The only time you fail is when you fall down and stay down."' , 'Stephen Richards', "Martin",new Date(2020,2,14),0,0),
    new Detail(5,'“Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.”', 'Lou Holtz', "Martin",new Date(2020,2,4),0,0),
    new Detail(6,'“The way I see it, if you want the rainbow, you gotta put up with the rain.”', 'Dolly Parton', "Martin",new Date(2020,3,30),0,0),
  ];
  addNewQuote(quote){
    let quoteLength = this.goals.length;
  quote.id = quoteLength+1;
    quote.postingDate= new Date()
    
    if (quote.author === ''|| quote.author === '' || quote.blogger === ''){
      alert('all fields are required!')
    }else{
      alert('Your Quote has been added Successfully')
    this.goals.push(quote);
    
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
 
