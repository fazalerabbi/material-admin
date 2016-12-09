import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutes } from './app.routes';
/**
 * Importing Components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { SideBarComponent } from './side-bar.component';
import { UserInfoComponent } from './user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    HttpModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
