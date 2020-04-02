import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlowerDataService} from './flower-data.service';
import {HttpClientModule} from '@angular/common/http';
import { FlowerTableComponent } from './flower-table/flower-table.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FlowerTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FlowerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
