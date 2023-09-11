import { Component , OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit{

  trendingpeople:any[] = [];
  currentPage = 1;
  itemsPerPage = 20; // Set the number of items per page
  maxDisplayedPages = 5;
  totalPages = 0;
  searchQuery: string = "";
  searchResults: any[] = [];
  
  imageprefix:string = 'https://image.tmdb.org/t/p/w500'
    constructor( private _MoviesService:MoviesService)
    {
  
    }
    ngOnInit(): void {
      this.fetchTrendingPeople(this.currentPage);
    }
  
    fetchTrendingPeople(page: number): void {
  this._MoviesService.trendingmovie('person', page).subscribe(data => {
    this.trendingpeople = data.results;
    this.totalPages = data.total_pages; 
    this.currentPage = page;
        });
    }
  
    goToPage(pageNumber: number) {
      if (pageNumber >= 1 && pageNumber <= this.getTotalPages()) {
        this.currentPage = pageNumber;
        this.fetchTrendingPeople(this.currentPage);
      }
    }
  
    nextPage() {
      if (this.hasNextPage()) {
        this.currentPage++;
        this.fetchTrendingPeople(this.currentPage);
      }
    }
  
    prevPage() {
      if (this.hasPrevPage()) {
        this.currentPage--;
        this.fetchTrendingPeople(this.currentPage);
      }
    }
  
    hasNextPage(): boolean {
      return this.currentPage < this.getTotalPages();
    }
  
    hasPrevPage(): boolean {
      return this.currentPage > 1;
    }
  
    getTotalPages(): number {
      return this.totalPages;
  
    }
    getPageNumbers(): number[] {
      const startPage = Math.max(1, this.currentPage - Math.floor(this.maxDisplayedPages / 2));
      const endPage = Math.min(this.totalPages, startPage + this.maxDisplayedPages - 1);
    
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
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
