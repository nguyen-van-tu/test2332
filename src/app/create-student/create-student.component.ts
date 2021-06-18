import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from '../i-student';
import { StudentService } from '../student.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  form: any = {};

  student: IStudent = {
    _id: '',
    studentCode: '',
    name: '',
    gender: '',
    address: ''
  };
  constructor(private studentService : StudentService,
              private router : Router
            ) { }

  ngOnInit(): void {
  }

  addNewStudent(){
 
    this.studentService.createStudent(this.student).subscribe(() =>{
      console.log("test3")
      this.router.navigate(['/'])
    });
  }
}
