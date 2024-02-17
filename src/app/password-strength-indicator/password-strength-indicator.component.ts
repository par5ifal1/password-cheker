import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-indicator',
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.css']
})
export class PasswordStrengthIndicatorComponent {
  @Input() strength: string = "";

  get isVeryWeak(): boolean {
    return this.strength === 'very weak';
  }

  get isWeak(): boolean {
    return this.strength === 'weak';
  }

  get isMedium(): boolean {
    return this.strength === 'medium';
  }

  get isStrong(): boolean {
    return this.strength === 'strong';
  }
}