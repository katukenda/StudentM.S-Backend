import { NgModule } from '@angular/core';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule,
  MatTableModule, 
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule

  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})

export class MaterialModule { }