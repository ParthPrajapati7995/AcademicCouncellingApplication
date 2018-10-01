import { Component, OnInit } from '@angular/core';
import { EducationDetailsModel } from '../data-models/education-details.model';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  educationDetails: Array<EducationDetailsModel>;

  constructor() {
    this.educationDetails = new Array<EducationDetailsModel>();
  }

  ngOnInit() {
    this.educationDetails.push(new EducationDetailsModel());
  }

  addDetail(): void {
    this.educationDetails.push(new EducationDetailsModel());
  }

  removeDetail(indx: number): void {
    this.educationDetails.splice(indx, 1);
  }
}
