import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';
import { CheckStorageService } from './check-storage.service';
import { LayoutComponent } from './layout.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { RedirectComponent } from './redirect/redirect.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { CategoriesComponent } from './categories/categories.component';
import { AnswerYesComponent } from './answer-yes/answer-yes.component';
import { AnswerNoComponent } from './answer-no/answer-no.component';
import { TotalScoreComponent } from './total-score/total-score.component';
import { TotalScoreCardComponent } from './total-score-card/total-score-card.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { TotalScoreEvaluationComponent } from './total-score-evaluation/total-score-evaluation.component';
import { TopicSelectionComponent } from './topic-selection/topic-selection.component';

const appRoutes: Routes = [

  {
    path: 'thema', component: TopicSelectionComponent,
    children: [
      { path: '', component: MenuBarComponent, outlet: 'top-bar'},
      { path: '', component: CategoriesComponent, outlet: 'categories', children: [
          { path: '', component: TotalScoreCardComponent, outlet: 'bottom-card'}
      ]}
    ]
  },
  { path: 'thema/:topic', component: TopicComponent,
    children: [
      { path: '', component: MenuBarComponent, outlet: 'top-bar'},
      { path: '', redirectTo: 'frage/0', pathMatch: 'full' },
      { path: 'frage/:question', component: QuestionComponent,
        children: [
          { path: 'yes', component: AnswerYesComponent },
          { path: 'no', component: AnswerNoComponent }
        ]
      },
      { path: 'auswertung', component: ScoreComponent },
      { path: 'animate/frage/:question', component: RedirectComponent },
      { path: 'animate/thema/:topic', component: RedirectComponent },
      { path: 'animate/auswertung', component: RedirectComponent },
    ]
  },
  { path: 'auswertung', component: TotalScoreComponent,
    children: [
      { path: '', component: MenuBarComponent, outlet: 'top-bar'},
      { path: '', component: TotalScoreEvaluationComponent }
    ]
  },
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: MenuBarComponent, outlet: 'top-bar'},
      { path: '', component: InfoCardComponent, outlet: 'info-card'}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    LayoutComponent,
    QuestionComponent,
    ScoreComponent,
    RedirectComponent,
    HomeComponent,
    TopicComponent,
    MenuBarComponent,
    InfoCardComponent,
    CategoriesComponent,
    AnswerYesComponent,
    AnswerNoComponent,
    TotalScoreComponent,
    TotalScoreCardComponent,
    BackButtonComponent,
    TotalScoreEvaluationComponent,
    TopicSelectionComponent
  ],
  imports: [
    LocalStorageModule.withConfig({
        prefix: 'klima-check',
        storageType: 'localStorage'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    CheckStorageService,
    MarkdownToHtmlPipe
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
