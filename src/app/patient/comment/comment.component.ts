import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CommentService} from '../services/comment.service';
import {Patient} from '../model/patient';
import {Comment} from '../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentService]
})
export class CommentComponent implements OnChanges {
  @Input() patient: Patient;
  comments: Comment[];
  commentAdd: Comment  = new Comment(0 , ' ', 0);
  constructor(private commentService: CommentService) { }

  ngOnChanges() {
    this.commentService.getAllPatientComments(this.patient).subscribe( received =>
    this.comments = received
    );
  }

  delete(comment: Comment) {
    this.commentService.deleteComment(this.patient, comment).subscribe( commentDeleted => {
      console.log(this.comments.indexOf(commentDeleted));
      this.comments.filter( commentCb => {
        if (commentCb.id === commentDeleted.id) {
          console.log(commentDeleted.id);
          this.comments.splice(this.comments.indexOf(commentCb), 1);
        }
      });
    });
  }

  add() {
    this.commentAdd.patient_id = this.patient.id;
    this.commentService.createComment(this.patient , this.commentAdd).subscribe( commentReceived => {
      console.log(commentReceived);
      this.comments.push(commentReceived);
      this.commentAdd.commentValue = ' ';
    });
  }

}
