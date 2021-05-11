import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separate-line-with-text',
  templateUrl: './separate-line-with-text.component.html',
  styleUrls: ['./separate-line-with-text.component.scss']
})
export class SeparateLineWithTextComponent implements OnInit {
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
