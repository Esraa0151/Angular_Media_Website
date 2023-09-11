import { Component , OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  trendingmovies:any[] = [];

  trendingpeople:any[] = [];
  trendingtv:any[] = [];
  currentpage:number = 1
  searchQuery: string = "";
  searchResults: any[] = [];
  
  imageprefix:string = 'https://image.tmdb.org/t/p/w500'
    constructor( private _MoviesService:MoviesService , private _Routr:Router)
    {
  
    }
    ngOnInit(): void
    {
      this.trending_media(this.currentpage)
    }


    trending_media(pageNumber: number)
    {
      {
         this._MoviesService.trendingmovie('movie' ,pageNumber).subscribe((data) =>
         {
            this.trendingmovies = data.results.slice( 0 , 15);
         })
    
         this._MoviesService.trendingmovie('tv' , pageNumber).subscribe((data) =>
         {
            this.trendingtv = data.results.slice( 0 , 15);
         })
  
        }
    }

    
    search() {
      if (this.searchQuery.trim() !== '') {
        this._MoviesService.searchMedia(this.searchQuery).subscribe((data: any) => {
          this.searchResults = data.results;
        });
      } else {
        this.searchResults = [];
      }
    }

    
  
}
