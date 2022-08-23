import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { KirbyModule } from '@kirbydesign/designsystem';

import { AppComponent } from './app.component';
import { DropdownIssueComponent } from './dropdown-issue/dropdown-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownIssueComponent,
  ],
  imports: [
    BrowserModule,
    KirbyModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
