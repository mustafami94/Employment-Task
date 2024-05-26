import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
