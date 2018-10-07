import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input() public step;
  @Output() public childEvent = new EventEmitter();
  selected = 'option1';

  @ViewChild('file') imageFile;
  imageFilePath: string;

  constructor() { }

  ngOnInit() {
  }

  addImage() {
    this.imageFile.nativeElement.click();
  }

  onImageAdded(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (loadEvent: any) => {
        this.imageFilePath = loadEvent.target.result;
        console.log(this.imageFilePath);
      }
    }
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