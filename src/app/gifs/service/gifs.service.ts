
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interface/gifs.interfaces';


const GIFSY_API_KEY = '4dnik6YdpE8KsQM6LDxAGJ3aWQqSJWKP';
const URL_API_GIFSY = 'https://api.giphy.com/v1/gifs'
const URL_API_PRO = 'http://localhost:9096/Api/propiedades'
const URL_API_PEL = 'http://localhost:9095/api/categorias'
@Injectable({
  providedIn: 'root'
})
export class GifsService { 

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = []; 
  public headers = new Headers({ 'content-type': 'application/json' });
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private horganizeHistory(tag: string) {
    if (tag.length === 0) return;

    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((onTag:string) => onTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);  
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if(this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0])

  }

  searchTag(tag:string):void{
     this.horganizeHistory(tag);

     const params = new HttpParams()
     .set('api_key',GIFSY_API_KEY)
     .set('limit',10)
     .set('q',tag)

     this.http.get<SearchResponse>(`${URL_API_GIFSY}/search`,{ params })
    .subscribe(result =>{
      this.gifList = result.data
    });  
  }  
    
    // this.http.get(`${URL_API_PEL}`)
    // .subscribe(result =>{
    //   console.log('respuesta de la api PELICULAS',result);
    // }); 

    // this.http.get(`${URL_API_PRO}`)
    // .subscribe(result =>{
    //   console.log('respuesta de la api PROPIEDADES',result);
    // }); 


  

  


}
