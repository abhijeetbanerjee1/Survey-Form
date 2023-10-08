import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  /*object*/
  students: Student[];

  constructor( private StudentService: StudentService){

  }

  ngOnInit():void{
    this.getStudents();
  
  }
  /*This Function is used to get the data from the database through a http request*/
  private getStudents(){
    this.StudentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }
}
