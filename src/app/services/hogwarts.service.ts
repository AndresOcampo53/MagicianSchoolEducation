import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Characters} from './../interfaces/characters'

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  _url ='http://hp-api.herokuapp.com/api/characters'

  constructor(private http:HttpClient) {
    
    console.log('servicio hogwarts')
   }

   getAllCharacters(){
     
  return this.http.get<Characters[]>(this._url);
   }

   getCharactersHouse(house:string){
     const path = `${this._url}/house/${house}`;
    return this.http.get<Characters[]>(path);

   }
}
