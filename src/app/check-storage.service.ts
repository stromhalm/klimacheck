import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ClimateCheck } from './climate-check';

@Injectable()
export class CheckStorageService {

  localStorage: LocalStorageService;

  constructor(private localStorageService: LocalStorageService) {}

  setAnswer(topicId: number, questionId: number, answer: boolean) {
    let storageValue = answer ? 'true' : 'false';
    localStorage.setItem('t_' + topicId + '_q_' + questionId, storageValue);
  }

  getAnswer(topicId: number, questionId: number): boolean {
    let storageValue = localStorage.getItem('t_' + topicId + '_q_' + questionId);
    if (storageValue === 'true') {
      return true;
    } else if (storageValue === 'false') {
      return false;
    } else {
      throw new ReferenceError();
    }
  }

  public isTopicComplete(topicId: number): boolean {
    for (let questionId in ClimateCheck.topics[topicId].questions) {
      if (true) {
        try {
          this.getAnswer(topicId, parseInt(questionId, 10));
        } catch(e) {
          return false;
        }
      }
    }
    return true;
  }

  public allTopicsComplete(): boolean {
    for (let i = 0; i < ClimateCheck.topics.length; i++) {
      if (!this.isTopicComplete(i)) {
        return false;
      }
    }
    return true;
  }

  public getTopicScore(topicId: number): number {
    let currentPoints = 0;
    ClimateCheck.topics[topicId].questions.forEach((question, questionId) => {
      try {
        if (this.getAnswer(topicId, questionId)) {
          currentPoints += question.points;
        }
      } catch (e) {
        return false;
      }
    });
    return currentPoints;
  }

  public getTopicPercentage(topicId: number): number {
    let maxPoints = 0;
    for (let question of ClimateCheck.topics[topicId].questions) {
      maxPoints += question.points;
    }
    let currentPoints = this.getTopicScore(topicId);

    let percentage = Math.round((currentPoints / maxPoints) * 100);
    return percentage;
  }

  public getTotalPercentage(): number {
    let maxPoints = 0;
    let totalPoints = 0;
    for (let topicId = 0; topicId < ClimateCheck.topics.length; topicId++) {
      totalPoints += this.getTopicScore(topicId);
      for (let question of ClimateCheck.topics[topicId].questions) {
        maxPoints += question.points;
      }
    }
    let percentage = Math.round((totalPoints / maxPoints) * 100);
    return percentage;
  }

  public getScoreText(topicId: number): string {
    let currentPoints = this.getTopicScore(topicId);
    for (let score of ClimateCheck.topics[topicId].scores) {
      if (currentPoints >= score.minPoints) {
        return score.text;
      }
    }
    return '';
  }

  public getTotalScoreText(): string {
    let totalPercentage = this.getTotalPercentage();
    for (let score of ClimateCheck.scores) {
      if (totalPercentage >= score.minPercent) {
        return score.text;
      }
    }
    return '';
  }

  public getTotalScoreTitle(): string {
    let totalPercentage = this.getTotalPercentage();
    for (let score of ClimateCheck.scores) {
      if (totalPercentage >= score.minPercent) {
        return score.title;
      }
    }
    return '';
  }

  public reset() {
    localStorage.clear();
  }
}
