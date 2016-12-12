import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';

import { CheckStorageService } from './check-storage.service';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { RedirectComponent } from './redirect/redirect.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';

const appRoutes: Routes = [

  { path: 'thema/:topic', component: TopicComponent,
    children: [
      { path: '', redirectTo: 'frage/0', pathMatch: 'full' },
      { path: 'frage/:question', component: QuestionComponent },
      { path: 'auswertung', component: ScoreComponent },
      { path: 'animate/frage/:question', component: RedirectComponent },
      { path: 'animate/auswertung', component: RedirectComponent },
    ]
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    QuestionComponent,
    ScoreComponent,
    RedirectComponent,
    HomeComponent,
    TopicComponent
  ],
  imports: [
    LocalStorageModule.withConfig({
        prefix: 'klima-check',
        storageType: 'localStorage'
    }),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [
    CheckStorageService,
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule {

}
