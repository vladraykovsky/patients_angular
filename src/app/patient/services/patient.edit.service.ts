import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';
import {Patient} from '../model/patient';
import {Message} from '../model/message';

@Injectable()
export class PatientEditService {

  constructor(private subject: Subject<Message>) {
  }

  edit(patient: Patient ) {
    const message: Message = new Message();
    message.message = 'edit';
    message.patient = patient;
    this.subject.next(message);
  }

  subscribe() {
    return this.subject;
  }
}
