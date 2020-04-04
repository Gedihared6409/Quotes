import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Detail } from '../detail';

@Component({
  selector: 'app-ali',
  templateUrl: './ali.component.html',
  styleUrls: ['./ali.component.css']
})
export class AliComponent implements OnInit {

  constructor() { }
  @Input () ali;


  @Output() isComplete = new EventEmitter<boolean>();

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  clickCounter:number=0;
  clickCounter1:number=0;

  
  ngOnInit(): void {
  }
  countLikeclick(){
    this.clickCounter += 1;
  }
  countDislikeclick(){
    this.clickCounter1 += 1;
  }
}



