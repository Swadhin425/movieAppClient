import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  authUrl: string = 'http://localhost:5004/api/comment/';

  constructor(private http: HttpClient) { }

  saveComment(commentInfo): Observable<any> {
    var saveCommentUrl = this.authUrl + 'saveComment';
    return this.http.post<any>(saveCommentUrl, JSON.stringify(commentInfo), httpOption);
  }
  getComments(commentInfo): Observable<any> {
    var saveCommentUrl = this.authUrl + 'getComments';
    return this.http.post<any>(saveCommentUrl, JSON.stringify(commentInfo), httpOption);
  }

}
