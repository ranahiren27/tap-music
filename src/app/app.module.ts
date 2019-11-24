import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisualComponent } from './visual/visual.component';
import { PadsComponent } from './pads/pads.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualComponent,
    PadsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
