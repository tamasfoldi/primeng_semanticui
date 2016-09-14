import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InputTextModule, DataTableModule, SharedModule, MultiSelectModule } from 'primeng/primeng';
import { RandomUserService } from './services';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule,
    FormsModule,
    HttpModule
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
