import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsModule1 } from './zad1/components/components.module';
import { RoutingConfig } from './app.routing';
import { ComponentsModule2 } from './zad2/components/components.module';
import { Index } from './index.component';

@NgModule({
  declarations: [
    AppComponent,
    Index
  ],
  imports: [
    RoutingConfig,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule,
    ComponentsModule1,  // Components for part 1 
    ComponentsModule2   // Components for part 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
