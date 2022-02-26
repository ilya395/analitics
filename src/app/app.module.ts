import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnaticsComponent } from './pages/analitics/analitics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneAnaticsPageComponent } from './pages/one-analitic-page/one-analitic-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableComponent } from './component/table/table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AnaticsComponent,
    OneAnaticsPageComponent,
    NotFoundComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
