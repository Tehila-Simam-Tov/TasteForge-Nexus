import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interface/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url: string="http://localhost:1234/users/"
  isuser: boolean = false
  idUser:string=""
  username: string = ""
  constructor(private http: HttpClient) { }

  addUser(u:User): Observable<boolean>{
    return this.http.post<boolean>(`${this.url}add`,u)
  }
  getByNameAndPass(name:string,pass:string): Observable<User>{
    return this.http.get<User>(`${this.url}GetByNameAndPass/${name}/${pass}`)
  }
  addRecipeToFevorit(id:string,body:any): Observable<boolean>{
    return this.http.put<boolean>(`${this.url}addToLoveRecips/${id}`,body)
  }
  getLoveRecips(id:string):Observable<Array<string>>{
    return this.http.get<Array<string>>(`${this.url}getLoveRecips/${id}`)
  }
  // deleteFromLoveRecips(id:string,body:any): Observable<boolean>{
  //   return this.http.delete<boolean>(`${this.url}deleteFromLoveRecips/${id}`,body)
  // }
  deleteFromLoveRecips(id: string, body: any): Observable<boolean> {
    // Use the options parameter to include the body
    const options = {
        body: body
    };
    return this.http.delete<boolean>(`${this.url}deleteFromLoveRecips/${id}`, options);
}
}
