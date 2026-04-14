import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LandingComponent
  ]
})
export class CoreModule { }
