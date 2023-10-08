import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  /*object*/
  stude : Student=new Student();
  /*to log the output of what has been entered*/
  log(x:any){
    console.log(x);
  }

  constructor(private studentService:StudentService,private router:Router){

  }
  ngOnInit(): void {
  }
  /*saves the data into the databse*/
  saveStudent(){
    this.studentService.createStudent(this.stude).subscribe(student => console.log(student));
  }

  /*router*/
  gotostudentlist(){
    this.router.navigate(['/student']);
  }
/*on pressing submit button a alert comes*/
  onSubmit(){
    console.log(this.stude);
    this.saveStudent();
    this.alert_function();
  }

  /*alert function*/
  alert_function(){
    window.alert("Survey submitted");
  }
}
