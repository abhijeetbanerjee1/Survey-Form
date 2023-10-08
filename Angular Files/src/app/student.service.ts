
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  /* url that stores the get and post JSON data that it recieves */
  private baseUrl="http://localhost:8080/api/v1/students"

  constructor(private  httpClient:HttpClient) { }

  /*Function to get the students that have been stored in the database using http requests */
  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  /*Function to send the data from the form as a post so that it can be stored in the database */
  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, student);
  }
}
