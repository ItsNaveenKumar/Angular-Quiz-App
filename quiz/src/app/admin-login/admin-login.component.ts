import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email;
  password;
  signUpEmail;
  signUpPassword;
  confirmPassword;
  name;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSignIn(signInEmail:HTMLInputElement,signInPassword:HTMLInputElement){
    if(signInEmail.value==""||!(signInEmail.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))){
       alert("Please enter valid Email!!");
    }
    else if(signInPassword.value==""||!(signInPassword.value.match(/[a-zA-Z0-9@_-]{6,}$/))){
      alert("Please enter Password!!");
    }
    else{
      this.router.navigate(['/admin-page']);
    }
    
  }
  onSignUp(signUpName:HTMLInputElement,signUpemail:HTMLInputElement,signUppass:HTMLInputElement,signUpCpass:HTMLInputElement){
    if(signUpName.value==""||!(signUpName.value.match(/[a-zA-Z]*$/))){
      alert("Please enter valid Name!!");
   }
   else if(signUpemail.value==""||!(signUpemail.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))){
     alert("Please enter valid Email!!");
   }
   else if(signUppass.value==""||!(signUppass.value.match(/[a-zA-Z0-9@_-]{6,}$/))){
    alert("Please enter Password!!");
  }
  else if(signUpCpass.value==""||signUpCpass.value!=signUppass.value){
    alert("Password not matched!!");
  }
  else{
    this.router.navigate(['/admin-page']);
  }
    
  }

}
