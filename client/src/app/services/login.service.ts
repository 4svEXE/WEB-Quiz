import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { UserModel } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webReqService: WebRequestService) { }

  registerUser(user: UserModel) {
    return this.webReqService.post('user/', user)
  }
}
