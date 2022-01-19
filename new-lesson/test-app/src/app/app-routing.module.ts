import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './component/child-a/child-a.component';
import { ChildBComponent } from './component/child-b/child-b.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  {
    path: 'first-component/:id', component: FirstComponent,
    children:[
      {path:'child-a',component:ChildAComponent},
      {path:'child-b',component:ChildBComponent}
    ]
  },
  { path: 'second-component', component: SecondComponent,canActivate:[YourGuardGuard] },
  { path: '**', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
