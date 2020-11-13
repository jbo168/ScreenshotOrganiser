import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
@NgModule({
  imports: [BrowserModule, DragDropModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
