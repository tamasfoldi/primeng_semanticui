import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../interfaces';
import 'rxjs/add/operator/map';

@Injectable()
export class RandomUserService {
  get users(): Observable<User[]> {
    return this._http.get('http://api.randomuser.me/?results=50')
      .map(data => data.json().results as User[])
      .map(users => users
        .map(user => Object.assign(new User(), user)
      )
    );
  }

  constructor(private _http: Http) { }

}
