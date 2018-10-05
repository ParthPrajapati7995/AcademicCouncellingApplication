import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input() public step;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
    this.childEvent.emit(this.step);
  }

  nextComponent() {
    this.step++;
    this.childEvent.emit(this.step);
  }

  prevComponent() {
    this.step--;
    this.childEvent.emit(this.step);
  }
  selected = 'option1';
}