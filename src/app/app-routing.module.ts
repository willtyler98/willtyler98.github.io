import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', component: PreviewComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
