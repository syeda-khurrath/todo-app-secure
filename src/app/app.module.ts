import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoFormComponent,
    TodoDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
