import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatRippleModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(),
    MatToolbarModule, MatSidenavModule, MatIconModule, MatRippleModule, MatMenuModule, MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
