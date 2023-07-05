import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VotingComponent } from './pages/voting/voting.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'voting', component: VotingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
