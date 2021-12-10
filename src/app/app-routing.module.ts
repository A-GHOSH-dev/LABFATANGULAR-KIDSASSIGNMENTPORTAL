import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmissionaddComponent } from './submissionadd/submissionadd.component';
import { SubmissionsDisplayComponent } from './submissions-display/submissions-display.component';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './subjects/subjects.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
 
  { path: 'submission', component: SubmissionComponent},
  {path: 'grade', component: GradesComponent},
  {path: 'subject', component: SubjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
