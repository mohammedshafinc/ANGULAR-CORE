import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ChildComponet } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ObsComponent } from './obs/obs.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { ShowtaskComponent } from './showtask/showtask.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponet,
    ParentComponent,
    ObsComponent,
    NewtaskComponent,
    ShowtaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
