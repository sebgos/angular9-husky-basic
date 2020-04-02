import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FeatureAComponent } from './feature-a/feature-a/feature-a.component'
import { FeatureBComponent } from './feature-b/feature-b/feature-b.component'

@NgModule({
  declarations: [AppComponent, FeatureAComponent, FeatureBComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
