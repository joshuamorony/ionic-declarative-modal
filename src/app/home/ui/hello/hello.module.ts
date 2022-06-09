import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class HelloComponentModule {}
