import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoComponent } from './todo/todo.component';
import {MatIconModule} from '@angular/material/icon';
import { TasksCompletedComponent } from './tasks-completed/tasks-completed.component';
import {MatCardModule} from '@angular/material/card';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { TagsComponent } from './tags/tags.component';
import {MatChipsModule} from '@angular/material/chips';
import { TodoWaitingListComponent } from './todo-waiting-list/todo-waiting-list.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoComponent,
    TasksCompletedComponent,
    TagsComponent,
    TodoWaitingListComponent,
    TagInputComponent
  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [DatePipe,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
