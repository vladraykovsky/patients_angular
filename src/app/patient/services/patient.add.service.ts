import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';
import {Patient} from '../model/patient';
import {Message} from '../model/message';

@Injectable()
export class PatientAddService {

  constructor(private subject: Subject<Message>) {
  }

  add(message: Message) {
    this.subject.next(message);
  }

  subscribe() {
    return this.subject;
  }


}
