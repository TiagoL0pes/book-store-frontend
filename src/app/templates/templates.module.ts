import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    NavBarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    NavBarComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class TemplatesModule { }
