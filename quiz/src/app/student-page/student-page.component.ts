import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  constructor(private quizService:QuizServiceService) { }
  showQuestions:boolean=false;
  showQues:boolean=false;
  showQuest:boolean=false;
  id;
 

  ab;
  ba;
  isDisabled: boolean;
  
  score=0;
  // ans1;
  // ans2;
  // ans3;
  // ans4;
  ngOnInit() {
  }
  onQuizStart(j){
    this.showQuestions=true;
    this.id=j;
    this.score=0;
    this.showQuest=false;
    this.showQues=false;
}
onSubmit(){
  this.showQuestions=false;
  this.showQues=false;
  this.showQuest=false;






}
onQuizStartt(){
  this.showQues=true;
  this.score=0;
  this.showQuest=false;
  this.showQuestions=false;
}
onQuiz2Startt(){
  this.showQuest=true;
  this.score=0;
  this.showQues=false;
  this.showQuestions=false;

}

onSave(A:HTMLInputElement,B:HTMLInputElement,C:HTMLInputElement,D:HTMLInputElement,idd,disable){
 
 this.ab=this.quizService.questionList1[idd].answer;

 disable.disabled=true;
if(A.checked)
{
  this.ba=A.value;
  
}
else if(B.checked)
{
  this.ba=B.value;
  
}
else if(C.checked)
{
  this.ba=C.value;
  
}
else {
  this.ba=D.value;
  
}

if(this.ab==this.ba){
  this.score+=2;
}
console.log(this.score);
 
  
}

onQuizSubmit(){
  
  this.showQuestions=false;
  this.showQues=false;
  this.showQuest=false;
}
}
