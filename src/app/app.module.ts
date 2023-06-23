import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { RegistComponent } from './regist/regist.component';
import { MyAppComponent } from './my-app/my-app.component';

import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    RegistComponent,
    MyAppComponent,
   
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
