import { Component, OnInit } from '@angular/core';
import quizzJson from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  protected title :string = "";
  protected question :any[] = [];
  
  protected currentQuestion :any = [];
  protected currentId :number = 0;

  protected isFinish :boolean = false;

  protected results :string[] = [];
  protected resultFinish :string = "";

  constructor() {
  
  }

  ngOnInit(): void {
    this.title = quizzJson.title;
    this.question  = quizzJson.questions

    this.currentQuestion = this.question[0];
    this.currentId = this.question[0].id;

  }

  protected restart(){
    this.currentQuestion = this.question[0];
    this.currentId = this.question[0].id;

    this.results = [];
    this.resultFinish = "";

    this.isFinish = false;
  }

  protected nextStap(response:string){
    this.results.push(response);
    this.currentId += 1;

    if(this.currentId < this.question.length){
      this.currentQuestion = this.question[this.currentId];
    } else {
      this.isFinish = true;
      this.response();
    }
  }

  protected response(){ 
    const countA :number= this.results.filter(item => item === 'A').length;
    const countB :number= this.results.filter(item => item === 'B').length;

    if(countA > countB){
      this.resultFinish = quizzJson.results.A;
    } else {
      this.resultFinish = quizzJson.results.B;
    }

  }

}
