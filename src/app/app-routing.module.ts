import { MasterPageComponent } from './layouts/master-page/master-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { PostsComponent } from './Modules/posts/posts.component';


const routes: Routes = [{
  path: '',
  component: MasterPageComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
path: 'post',
component: PostsComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
