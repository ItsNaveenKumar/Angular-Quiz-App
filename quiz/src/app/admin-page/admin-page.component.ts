import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  constructor(private quizService:QuizServiceService) { }
  add:boolean=false;
  addModule:boolean=true;
  addQuestions:boolean=false;
  //topics:string;
  noOfque;
 // modules=[];
  // question=[1,2,3];
  question;
  opt1;
  opt2;
  opt3;
  opt4;
  ans;
  
  jj=1;
  i=0;
  modIndex;
  addMore:boolean=true;
  showQuestions:boolean=false;
  questionSaved=[];
  Topic;
 

  ngOnInit() {
  }
  onAddQuiz(){
    this.add=!this.add;

  }
  onAddModule(topic:HTMLInputElement)
  { if(topic.value==""){
    alert("Please provide Topic of Module!!");
  }
  else{
    
    const module={topics:topic.value ,questions:[]};
    this.quizService.modules.push(module);
    this.add=false;
    this.addModule=true;}
    // this.topics=topic.value;
    // this.noOfque=noOfQues.value;
  }

  onAddQuestion(w){
    this.addQuestions=true;
    this.modIndex=w;
    this.jj=1;
    
  }
  onDeleteModule(j){
    this.quizService.modules.splice(j,1);
    this.showQuestions=false;
    this.addQuestions=false;
  }
  // onNext(){
  //   this.jj++;
  //   this.question="";
  //   this.opt1="";
  //   this.opt2="";
  //   this.opt3="";
  //   this.opt4="";
  //   this.ans1="";
  //   this.ans2="";
  //   this.ans3="";
  //   this.ans4="";
  //   if(this.jj>5){
  //     this.addQuestions=false;

  //   }
  // }
  onSubmit(questt:HTMLInputElement,A:HTMLInputElement,B:HTMLInputElement,C:HTMLInputElement,D:HTMLInputElement,corrrect:HTMLInputElement){

    if(questt.value=="")
    {alert("Please provide Question!!");}
    else if(A.value=="")
    {alert("Please provide Option A !!");}
    else if(B.value=="")
    {alert("Please provide Option B !!");}
    else if(C.value=="")
    {alert("Please provide Option C !!");}
    else if(D.value=="")
    {alert("Please provide Option D !!");}
    else if(corrrect.value==""||!(corrrect.value.match(/[A-D]/)))
    {alert("Please provide Answer like A,B,C,D !!");}
    else{
    this.i++
   this.quizService.modules[this.modIndex].questions.push({
     id:this.i,
     quest:this.question,
     option1:this.opt1,
     option2:this.opt2,
    option3:this.opt3,
    option4:this.opt4,
    answer:this.ans,
    
  
  });
  //
  this.jj++;
  this.question="";
  this.opt1="";
  this.opt2="";
  this.opt3="";
  this.opt4="";
  this.ans="";
 
  if(this.jj>5){
    this.addQuestions=false;
    this.jj=1;

  }
  //this.questionSaved.push(this.modules);
  //alert("Question "+this.i+" Saved");
  //console.log(this.questionSaved);
 }
  }
  onShowModule(idx){
    this.showQuestions=!this.showQuestions;
    this.modIndex=idx;
  }

}
