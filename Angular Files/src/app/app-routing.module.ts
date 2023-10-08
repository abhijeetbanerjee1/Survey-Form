import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { WelcomeComponent } from './welcome/welcome.component';

/*Decleration of routes */
const routes: Routes = [
  {path: 'students', component: EmployeeListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path:'welcome', component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
