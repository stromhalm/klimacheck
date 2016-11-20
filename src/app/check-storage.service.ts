import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

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
}