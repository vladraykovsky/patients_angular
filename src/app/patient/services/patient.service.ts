import {HttpClient} from '@angular/common/http';
import {Patient} from '../model/patient';
import {Injectable} from '@angular/core';

@Injectable()
export class PatientService {
  constructor(private http: HttpClient) {}

  getAllPatient() {
    return this.http.get<Patient[]>('http://localhost:3000/api/patients/');
  }


  getPatientById(patient: Patient) {
    return this.http.get<Patient>(`http://localhost:3000/api/patients/${patient.id}`);
  }

  createPatient(patient: Patient) {
    return this.http.post<Patient>(`http://localhost:3000/api/patients/`, patient);
  }

  editPatient(patient: Patient) {
    return this.http.put<Patient>(`http://localhost:3000/api/patients/${patient.id}`, patient);
  }

  deletePatient(patient: Patient) {
    return this.http.delete<Patient>(`http://localhost:3000/api/patients/${patient.id}`);
  }



}
