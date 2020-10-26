import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { ResumeComponent } from './resume/resume.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'secret', component: SecretComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
