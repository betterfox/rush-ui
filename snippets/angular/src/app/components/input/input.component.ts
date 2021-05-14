import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnDestroy, ViewEncapsulation, Self, DoCheck } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NgControl, Validators, FormGroup } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true }
  ],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @Input() label: string;
  @Input() placeholder: string;
  @Input() icon: string;
  @Input() name: string;

  onChange = (value: string) => { };
  onTouched = (value: boolean) => { };

  form: FormControl = new FormControl('');
  subscriber: Subscription;
  isDisabled: boolean = false;
  isTouched: boolean = false;
  isFocus: boolean = false;
  mask: any = null;
  error: string = null;

  constructor(
    private http: HttpClient
  ) {
  }

  get value(): any {
    return this.form.value;
  }

  set value(val) {
    this.form.setValue(val);
  }

  @Input()
  set disabled(isDisabled: boolean) {
    this.isDisabled = isDisabled;
    if (this.form && isDisabled) {
      this.form.disable()
    } else {
      this.form.enable()
    }
  }

  _type: string = 'text'
  @Input()
  set type(type: any) {
    if (type == "password") {
      this._type = type;
    }

    if (type === "number") {
      this.mask = "0{10}.0{2}"
    } else {
      this.mask = null
    }
  }

  @Input()
  set required(isRequired: boolean) {
    if (this.form && isRequired) {
      this.form.setValidators([Validators.required]);
    } else {
      this.form.clearValidators()
    }
    this.form.updateValueAndValidity()
  }

  ngOnInit() {
    this.subscriber = this.form.valueChanges.pipe(distinctUntilChanged()).subscribe(val => {
      this.clearError();
      this.onChange(this.form.value);

      if (this.valueChange) {
        this.valueChange.emit(val)
      }
    });
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }

  clearError() {
    this.error = null;
  }

  writeValue(value: string): void {
    this.form.setValue(value, { emitEvent: false, onlySelf: true });
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  get isError() {
    return !this.isDisabled && !this.form.valid && this.isTouched
  }

  onFocus() {
    this.isFocus = true;
  }

  onBlur() {
    this.isFocus = false;
  }

  @Input()
  set touched(isTouched: boolean) {
    this.isTouched = isTouched;
    if (isTouched) {
      this.form.markAsTouched({ onlySelf: true })
    }
  }
}
