import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../model/patient';
import {Comment} from '../model/comment';

@Injectable()
export  class CommentService {

  constructor(private http: HttpClient) {}

  getAllPatientComments(patient: Patient) {
    return this.http.get<Comment[]>(`http://localhost:3000/api/patients/${patient.id}/comments`);
  }

  createComment(patient: Patient , comment: Comment) {
    return this.http.post<Comment>(`http://localhost:3000/api/patients/${patient.id}/comments`, comment);
  }

  deleteComment(patient: Patient , comment: Comment) {
    return this.http.delete<Comment>(`http://localhost:3000/api/patients/${patient.id}/comments/${comment.id}`);
  }




}
