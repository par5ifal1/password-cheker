import { Component, EventEmitter, Output, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true
  }]
})
export class PasswordInputComponent implements OnInit, ControlValueAccessor{
  @Output() inputChange = new EventEmitter<Event>();
  startControl = new FormControl();
  onChange:any;
  onTouch:any;

  constructor() {}

  ngOnInit(): void {
    this.startControl.valueChanges.subscribe((val) =>{
      if (this.onChange){
        this.onChange(val)
      }
    });
  }

  writeValue(value: any): void {
    this.startControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}