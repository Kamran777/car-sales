import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

const IMPORTS_EXPORTS: Type<any>[] = [CommonModule, MaterialModule];

@NgModule({
  imports: [IMPORTS_EXPORTS],
  exports: [IMPORTS_EXPORTS],
})
export class SharedModule {}
