import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/patient';
import {PatientService} from '../services/patient.service';
import {PatientAddService} from '../services/patient.add.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
  providers: [PatientService , PatientAddService]
})
export class PatientAddComponent implements OnInit {

  patientAdd: Patient = new Patient(0, '', '', '', ' ', '', '');

  sex = [
    {value: 'male', viewValue: 'male'},
    {value: 'female', viewValue: 'female'}
  ];

  constructor(private patientService: PatientService,
              private patientAddService: PatientAddService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.patientService.createPatient(this.patientAdd).subscribe( receivedPatient => {
      this.patientAdd = receivedPatient;
      this.patientAddService.add({message: 'add' , patient: receivedPatient});
      this.router.navigateByUrl(`patients/${receivedPatient.id}`);
    });
  }


  cancel() {
    this.router.navigateByUrl('/patients');
  }




}
