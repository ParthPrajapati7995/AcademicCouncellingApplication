import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatDialogModule, MatListModule, MatProgressBarModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ResearchInterestsComponent } from './research-interests/research-interests.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    EducationDetailsComponent,
    PersonalDetailsComponent,
    ResearchInterestsComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  entryComponents: [FileUploadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
