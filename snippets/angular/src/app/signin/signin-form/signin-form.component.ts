import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms'
import { RequestStatus } from 'src/app/enum/request-status.enum';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {
  @Input() error: string;
  @Input() status: RequestStatus = null;
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter();
  RequestStatus = RequestStatus;

  form: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    })
  }

  onSubmit() {
    if (!this.form.valid) {
      this.form.markAsTouched()
      return false;
    }
    this.onFormSubmit.emit(this.form.value)
  }
}
