import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
 })
 
 export class HomeModule {}