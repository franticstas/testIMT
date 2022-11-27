import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegexpService {
  EMAIL_REGEXP =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  PASSWORD_REGEXP = /[^A-Za-z0-9]+/;
}
