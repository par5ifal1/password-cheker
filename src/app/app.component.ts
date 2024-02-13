import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  strength:string = "";
  
  handleInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;

    this.checkPasswordStrength(inputValue.replaceAll(" ", ""));
  }

  checkPasswordStrength(password:string) {

    if (password.length == 0){
      this.strength = "gray";
    } else if (password.length < 8) {
      this.strength = "very weak";
    } else if (password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[a-zA-Z\d@#$%^&*!]+$/) ){
      this.strength = "strong";
    } else if (
      password.match(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/) 
    || password.match(/^(?=.*[a-zA-Z])(?=.*[@#$%^&*!])[a-zA-Z\d@#$%^&*!]+$/) 
    || password.match(/^(?=.*\0-9)(?=.*[@#$%^&*!])[a-zA-Z\d@#$%^&*!]+$/)) 
    {
      this.strength = "medium";
    } else if (
      password.match(/^[a-zA-Z]+$/) 
    || password.match(/^[\d]+$/) 
    || password.match(/^[!@#$%^&*(),.?":{}|<>]+$/))
    {
      console.log("weak")
      this.strength = "weak";
    }
  }
}
