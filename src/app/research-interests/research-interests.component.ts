import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { ResearchDetailsModel } from '../data-models/research-details.model';

@Component({
  selector: 'app-research-interests',
  templateUrl: './research-interests.component.html',
  styleUrls: ['./research-interests.component.css']
})
export class ResearchInterestsComponent implements OnInit {

  @Input() public step;
  @Output() public childEvent = new EventEmitter();

  researchInterests : Array<ResearchDetailsModel>
  
  constructor() { 
    this.researchInterests = new Array<ResearchDetailsModel>();
  }

  ngOnInit() {
    this.researchInterests.push(new ResearchDetailsModel());
  }

  addDetail(): void {
    this.researchInterests.push(new ResearchDetailsModel());
  }

  removeDetail(indx: number): void {
    this.researchInterests.splice(indx, 1);
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
}
