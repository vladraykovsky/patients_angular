import { Component, OnInit } from '@angular/core';
import {PatientService} from '../services/patient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from '../model/patient';
import {PatientEditService} from '../services/patient.edit.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
  providers: [PatientEditService, PatientService]
})
export class PatientEditComponent implements OnInit {

  patient: Patient = new Patient(0, '',  '', '', '', '', '');

  constructor(private patientService: PatientService,
              private routes: Router,
              private activRout: ActivatedRoute,
              private patientEditService: PatientEditService) { }

  ngOnInit() {
      this.activRout.params.subscribe( params => {
        this.patient.id = params['id'];
        this.patientService.getPatientById(this.patient).subscribe( received => {
          this.patient = received;
        });
      });
  }


  save() {
    this.patientService.editPatient(this.patient).subscribe( recived => {
      this.patientEditService.edit(recived);
       this.routes.navigateByUrl(`patients/${recived.id}`);
    });
  }

  cancel() {
    this.routes.navigateByUrl(`patients/${this.patient.id}`);
  }

}
