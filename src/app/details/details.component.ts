
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit
{
  mediaType: string | null = null;
  mediaId: string | null = null;
  mediaDetails: any | null = null;
  imageprefix:string = 'https://image.tmdb.org/t/p/w500'

  constructor(private route: ActivatedRoute, private mediaService: MoviesService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mediaType = params['mediatype'];
      this.mediaId = params['id'];
      this.loadMediaDetails();
    });
  }

  loadMediaDetails() {
    if (this.mediaType && this.mediaId) {
      this.mediaService.getmoviedetails(this.mediaType, this.mediaId).subscribe(
        (details: any) => {
          this.mediaDetails = details;
        },
        error => {
          console.error('Error fetching media details:', error);
        }
      );
    }
  }

}
