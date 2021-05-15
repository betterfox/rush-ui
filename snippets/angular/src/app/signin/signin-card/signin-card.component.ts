import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestStatus } from 'src/app/enum/request-status.enum';

@Component({
  selector: 'app-signin-card',
  templateUrl: './signin-card.component.html',
  styleUrls: ['./signin-card.component.scss']
})
export class SigninCardComponent implements OnInit {

  status: number = RequestStatus.Nop;
  RequestStatus = RequestStatus;
  error: string = null;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(dto) {
    this.status = RequestStatus.Loading;
    try {
      // Http Request
      setTimeout(() => {
        this.status = RequestStatus.Error;
        this.error = `Username or password is incorrect`;
      }, 2000)
    } catch (error) {
      this.status = RequestStatus.Error;
      this.error = error;
    }
  }

}
