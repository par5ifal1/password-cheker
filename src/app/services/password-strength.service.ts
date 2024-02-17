import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  constructor() { }

  checkPasswordStrength(password: string): string {    
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@#$%^&*!]/.test(password);

    switch (true) {
      case password.length === 0:
        return "gray"
      case password.length < 8:
        return "very weak";
      case hasLetter && hasDigit && hasSpecialChar:
        return "strong";
      case (hasLetter && hasDigit) || (hasLetter && hasSpecialChar) || (hasDigit && hasSpecialChar):
        return "medium";
      case hasLetter || hasDigit || hasSpecialChar:
        return "weak";
      default:
        return "unknown";
    }
  }

}
