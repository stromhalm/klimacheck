import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';

import { CheckStorageService } from './check-storage.service';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';

const appRoutes: Routes = [
  { path: 'thema/:topic/frage/:question', component: QuestionComponent },
  { path: 'thema/:topic/auswertung', component: ScoreComponent },
  { path: 'thema/:topic', redirectTo: '/thema/:topic/frage/0' },
  { path: '', redirectTo: '/thema/0/frage/0', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

// Create config options (see ILocalStorageServiceConfigOptions) for deets:
let localStorageServiceConfig = {
    prefix: 'klima-check',
    storageType: 'localStorage'
};


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    QuestionComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [
    LocalStorageService,
    CheckStorageService,
    {
      provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
    }
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule {

}