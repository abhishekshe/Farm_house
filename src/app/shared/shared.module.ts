import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
