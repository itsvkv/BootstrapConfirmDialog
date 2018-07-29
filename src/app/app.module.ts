
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(ConfirmDialogComponent, this.injector);
    const confirmDialog = createCustomElement(ConfirmDialogComponent, { injector,strategyFactory });
    customElements.define('confirm-dialog', confirmDialog);
  }

  ngDoBootstrap() { }
}
