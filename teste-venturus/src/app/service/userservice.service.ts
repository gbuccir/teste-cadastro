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

  setNewUser(user) {
    this.user = user;
  }

  getNewUser() {
    return this.user;
  }

}
