import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { TableComponentComponent } from './table-component/table-component.component';
import {MatTableModule} from '@angular/material/table';

import {HttpClientModule } from '@angular/common/http';
import { FormComponentComponent } from './form-component/form-component.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoginComponentComponent } from './Auth-component/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    FormComponentComponent,
    LoginComponentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,FormsModule, MatFormFieldModule, MatInputModule, MatTooltipModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
