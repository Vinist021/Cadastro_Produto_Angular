import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';
import localePT from '@angular/common/locales/pt'

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProductComponent } from './components/product/product';
import { ProductsComponent } from './components/products/products';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    ProductComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [App]
})
export class AppModule { }
