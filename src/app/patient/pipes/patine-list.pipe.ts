import {Pipe, PipeTransform} from '@angular/core';
import {Patient} from '../model/patient';

@Pipe({
  name: 'patientList',
  pure: true
})
export class PatineListPipe implements PipeTransform {

  transform(patient: Patient[], search: string) {
    if (search === '' ) {
      return patient;
    } else {
      return patient.filter( it => {
        if (search.includes(it.name, 0) || search.includes(it.surname, 0)  || it.name.includes(search, 0) || it.surname.includes(search, 0) ) {
          return it;
        }
      });
    }
  }
}
