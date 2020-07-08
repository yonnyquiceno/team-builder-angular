import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'team-builder', component: TeamBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
