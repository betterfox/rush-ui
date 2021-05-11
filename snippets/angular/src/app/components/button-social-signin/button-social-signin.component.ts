import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-social-signin',
  templateUrl: './button-social-signin.component.html',
  styleUrls: ['./button-social-signin.component.scss']
})
export class ButtonSocialSigninComponent implements OnInit {
  @Input() logo: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
