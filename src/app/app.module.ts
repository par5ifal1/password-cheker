import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthIndicatorComponent } from './password-strength-indicator/password-strength-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
