import { Component, OnInit } from '@angular/core';
import {PatientService} from '../services/patient.service';
import {Patient} from '../model/patient';
import {PatientAddService} from '../services/patient.add.service';
import {PatientEditService} from '../services/patient.edit.service';
import {Router} from '@angular/router';
import {PatientDeleteService} from '../services/patient.delete.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [PatientService, PatientAddService]
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  search = '';
  constructor(private patientService: PatientService,
              private patientAddService: PatientAddService,
              private patientEditService: PatientEditService,
              private patientDeleteService: PatientDeleteService,
              private router: Router) { }

  ngOnInit() {
    this.patientService.getAllPatient().subscribe( patientList => {
      this.patients = patientList;
      this.router.navigateByUrl(`patients/${this.patients[0].id}`);
    });
    this.patientAddService.subscribe().subscribe( message => {
      if (message.message === 'add') {
        this.patients.push(message.patient);
       }
    });
    this.patientEditService.subscribe().subscribe( message => {
      for (let i = 0; i < this.patients.length; i++) {
       if (this.patients[i].id === message.patient.id && message.message === 'edit') {
         this.patients[i] = message.patient;
       }
      }
      });
    this.patientDeleteService.subscribe().asObservable().subscribe( message => {
      if (message.message === 'delete') {
        if (this.patients.indexOf(message.patient) === 0) {
          this.router.navigateByUrl('patients/' + (message.patient.id + 1));
        } else {
          this.router.navigateByUrl( 'patients/' + (message.patient.id - 1));
        }
        this.patients.splice(this.patients.indexOf(message.patient, 1));
      }
    });
    // todo remove patient
  }

  navigateToAdd() {
    this.router.navigateByUrl('patients/add');
  }


}
