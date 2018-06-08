import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import {PatientService} from './patient/services/patient.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PatientAddService} from './patient/services/patient.add.service';
import {Subject} from 'rxjs/index';
import {PatientEditService} from './patient/services/patient.edit.service';
import { CommentComponent } from './patient/comment/comment.component';
import {CommentService} from './patient/services/comment.service';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import {PatientDeleteService} from './patient/services/patient.delete.service';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {PatineListPipe} from './patient/pipes/patine-list.pipe';
const routes: Routes = [
  {path: 'patients', component: PatientListComponent , children: [
      {path: 'add', component: PatientAddComponent },
      {path: ':id/edit', component: PatientEditComponent},
      {path: ':id', component: PatientDetailsComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    PatientEditComponent,
    PatientAddComponent,
    PatientDetailsComponent,
    CommentComponent,
    PatineListPipe
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatInputModule ,
    ScrollDispatchModule ,
    MatCardModule ,
    BrowserAnimationsModule ,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PatientService, PatientAddService, Subject , PatientEditService , PatientDeleteService , CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
