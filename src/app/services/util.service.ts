import { Injectable, Inject } from '@angular/core';
import { AppConstants } from '../app.constants';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Injectable()
export class UtilService {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    saveToStorage(key: string, value: any): void {
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.   
            const jsondata = JSON.stringify(value);
            localStorage.setItem(key,jsondata);
        }
    }

    getFromStorage(key: string): any{
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.
            let value = localStorage.getItem(key);   
            return value !== 'undefined' ? value :null;
        }
    }

    removeFromStorage(key: string): void {
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.
            localStorage.removeItem(key);
        }
      }
}