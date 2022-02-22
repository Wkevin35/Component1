import { ToolbarModule } from '../../../node_modules/component2/src/app/toolbar/toolbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule
  ],
  exports:[TestComponent]
})
export class TestModule { }
