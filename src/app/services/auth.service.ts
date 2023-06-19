import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserDto } from '../model/login-user-dto';
import { Observable } from 'rxjs';
import { JwtTokenDto } from '../model/jwt-token-dto';
import { environment } from 'src/environments/environment.development';
import { CreateUserDto } from '../model/create-user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.apiRestFull + '/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(dto: LoginUserDto): Observable<JwtTokenDto> {
    return this.httpClient.post<JwtTokenDto>(this.authURL + 'login', dto);
  }

  public register(dto: CreateUserDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'create-user', dto);
  }
}
