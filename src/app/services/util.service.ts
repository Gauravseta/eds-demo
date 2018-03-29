import { Injectable, Inject } from '@angular/core';
import { AppConstants } from '../app.constants';


@Injectable()
export class UtilService {


    saveToStorage(key: string, value: any): void {
        const jsondata = JSON.stringify(value);
        localStorage.setItem(key,jsondata);
    }

    getFromStorage(key: string): any{
       let value = localStorage.getItem(key);

       return value !== 'undefined' ? value :null;
    }

    removeFromStorage(key: string): void {
        localStorage.removeItem(key);
      }
}