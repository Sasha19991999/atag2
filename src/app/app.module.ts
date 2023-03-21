import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectViewerComponent } from './object-viewer/object-viewer.component';
import { InteractiveViewerComponent } from './pages/interactive-viewer/interactive-viewer.component';
import { ProductFeaturesComponent } from './pages/product-features/product-features.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectViewerComponent,
    InteractiveViewerComponent,
    ProductFeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfJsViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
