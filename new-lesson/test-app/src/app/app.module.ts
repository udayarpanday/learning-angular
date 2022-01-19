import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { SandboxComponent } from './component/sandbox/sandbox.component';
import { GreetingsPipePipe } from './greetings-pipe.pipe';
import { SizerComponent } from './component/sizer/sizer.component';
import { HighlightDirective } from './highlight.directives';
import { Sandbox2Component } from './component/sandbox2/sandbox2.component';
import { LogService } from './log.service';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ChildAComponent } from './component/child-a/child-a.component';
import { ChildBComponent } from './component/child-b/child-b.component';
import { FormComponent } from './component/form/form.component';
import { ReactiveFromComponent } from './component/reactive-from/reactive-from.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    SandboxComponent,
    GreetingsPipePipe,
    SizerComponent,
    HighlightDirective,
    Sandbox2Component,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent,
    FormComponent,
    ReactiveFromComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
