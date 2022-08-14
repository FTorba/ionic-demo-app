import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [NavigationComponent],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NavigationComponent
  ]
})
export class SharedModule {}
