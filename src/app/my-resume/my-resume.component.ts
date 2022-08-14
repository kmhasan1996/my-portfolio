import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent implements OnInit {

  currentDate  = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
