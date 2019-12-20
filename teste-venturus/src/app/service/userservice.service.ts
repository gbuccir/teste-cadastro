import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  private user;

  nullOrUndef(obj) {
    return obj === undefined || obj == null;
  }

  nullOrUndefOrEmpty(obj) {
    return obj === undefined || obj == null || obj === "";
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  }

  setNewUser(user) {
    this.user = user;
  }

  getNewUser() {
    return this.user;
  }

}
