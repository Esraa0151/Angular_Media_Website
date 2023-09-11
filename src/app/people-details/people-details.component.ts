import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  id:string = ''; 
  people:any = {};
  imagepre:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute , 
    private _MoviesService:MoviesService )
  {

  }
   ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params?.['id'];
    this._MoviesService.getmoviedetails( "person" ,this.id).subscribe((response) =>
  {
     this.people = response;

  })
     
   }
  

}
