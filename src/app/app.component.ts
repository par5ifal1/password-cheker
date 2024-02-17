import { Component, OnInit } from '@angular/core';
import { PasswordStrengthService } from './services/password-strength.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  strengthService:PasswordStrengthService;
  formRew!: FormGroup;

  ngOnInit(): void {
    this.formRew = this.fb.group({
      password: [''],
      strength: ['']
    });
    
    const yourFieldControl = this.formRew.get('password');
    if(yourFieldControl){
    yourFieldControl.valueChanges.subscribe((newValue) => {
      this.formRew.patchValue({
        strength: this.strengthService.checkPasswordStrength(newValue)
      })
    });
  };
  }

  constructor(passwordStrengthService: PasswordStrengthService, private fb:FormBuilder) {
    this.strengthService = passwordStrengthService;
  }

  getStrength(){
    return this.formRew.value.strength;
  }
}