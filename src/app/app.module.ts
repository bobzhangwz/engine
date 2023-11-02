import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { AppRoutingModule } from './app-routing.module';

import { createCustomElement } from '@angular/elements';
import { LedgeComponent } from './ledge/ledge.component';

import { LedgeRenderModule } from '@ledge-framework/render';
import { LedgeEditorComponent } from './ledge-editor/ledge-editor.component';

@NgModule({
  declarations: [LedgeComponent],
  imports: [
    BrowserModule,
    AngularSplitModule.forRoot(),
    LedgeRenderModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [LedgeComponent],
  entryComponents: [LedgeComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    if (customElements.get('ledge')) {
      return;
    }

    const webComponent = createCustomElement(LedgeComponent, {
      injector: this.injector,
    });
    customElements.define('ledge-theme', webComponent);

    const editComponent = createCustomElement(LedgeEditorComponent, {
      injector: this.injector,
    });
    customElements.define('ledge-editor', editComponent);
  }

  ngDoBootstrap() {}
}
