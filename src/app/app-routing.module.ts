import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contentRoutes } from './shared/routes/content.routes';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: contentRoutes }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
