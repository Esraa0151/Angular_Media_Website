
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import {DomSanitizer} from '@angular/platform-browser';


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
  vedio:string = "";
  videoSrc:any=""
  showRow:boolean = false;
  imageprefix:string = 'https://image.tmdb.org/t/p/w500'

  constructor(private route: ActivatedRoute, private mediaService: MoviesService , private _DomSanitizer : DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mediaType = params['mediatype'];
      this.mediaId = params['id'];
      this.loadMediaDetails();

      this.mediaService.getTrailer(this.mediaType,this.mediaId).subscribe((videos)=>{
        this.vedio=videos.results[0].key
        if(videos.results[0].key){
           this.showRow=true
        }
        this.videoSrc=`https://www.youtube.com/embed/${this.vedio}?rel=0`
      })
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
  
  videoURL(videoSrcUrl:any) {
    return this._DomSanitizer.bypassSecurityTrustResourceUrl(videoSrcUrl);
  }
}
