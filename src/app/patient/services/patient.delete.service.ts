import {Injectable} from '@angular/core';
import {PatientService} from './patient.service';
import {Subject} from 'rxjs/index';
import {Message} from '../model/message';


@Injectable()
export class PatientDeleteService {

  constructor(private subject: Subject<Message>) {
  }

  delete(message: Message) {
    this.subject.next(message);
  }

  subscribe() {
    return this.subject;
  }

}
