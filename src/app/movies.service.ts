import {HttpClient} from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor( public _httpclient:HttpClient) { 

  }
  trendingmovie(tvmovoiep:string , page:number):Observable<any>
  {
     return this._httpclient.get(`https://api.themoviedb.org/3/trending/${tvmovoiep}/day?api_key=2e985a4c3d1e88c32a2cfdddf317eb0e&page=${page}`);
  }

    getmoviedetails( mudiatype:string , id:string ):Observable<any>
  {
     return this._httpclient.get(`https://api.themoviedb.org/3/${mudiatype}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);
  }

  searchMedia(query: string) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&query=${query}`;
    return this._httpclient.get(url);
  }
}
