import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './views/shared/sidebar/sidebar.component';
import { HomeComponent } from './views/pages/home/home.component';
import { TestsComponent } from './views/pages/tests/tests.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsWidgetComponent } from './views/shared/sidebar/settings-widget/settings-widget.component';
import { CreateTestComponent } from './views/pages/create-test/create-test.component';
import { AllTestsComponent } from './views/pages/all-tests/all-tests.component';
import { EditTestComponent } from './views/pages/edit-test/edit-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    TestsComponent,
    SettingsWidgetComponent,
    CreateTestComponent,
    AllTestsComponent,
    EditTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
