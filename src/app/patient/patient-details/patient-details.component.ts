import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/patient';
import {PatientService} from '../services/patient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientDeleteService} from '../services/patient.delete.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  providers: [PatientService, PatientDeleteService]
})
export class PatientDetailsComponent implements OnInit {

  patient: Patient = new Patient(0,  '',  '', '', '', '' , '' );


  constructor(private patientService: PatientService,
              private activeRout: ActivatedRoute,
              private router: Router,
              private patientDeleteService: PatientDeleteService) { }

  ngOnInit() {
    this.activeRout.params.subscribe( params => {
      this.patient.id = params['id'];
      this.patientService.getPatientById(this.patient).subscribe( received => {
        this.patient = received;
      });
    });
  }


  edit() {
    this.router.navigateByUrl(`patients/${this.patient.id}/edit`);
  }


  delete() {
    this.patientService.deletePatient(this.patient).subscribe( receivedPatient => {
       this.patientDeleteService.delete({message: 'delete', patient: receivedPatient });
    });
  }




}
