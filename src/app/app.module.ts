import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './components/register-Component/register/register.component';
import { RegisterInputsComponent } from './components/shared/register-inputs/register-inputs.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent,RegisterComponent,RegisterInputsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
