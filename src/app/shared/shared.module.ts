import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule, MATERIAL_MODULES],
  exports: [ReactiveFormsModule, MATERIAL_MODULES],
})
export class SharedModule {}
