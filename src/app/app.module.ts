import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import the missing components
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MissionfilterComponent, 
    MissionlistComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
