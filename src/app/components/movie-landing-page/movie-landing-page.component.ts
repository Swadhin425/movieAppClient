import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../movie.service';
import { API_KEY, API_URL,IMAGE_BASE_URL,BACKDROP_SIZE } from '../../Config';

@Component({
  selector: 'app-movie-landing-page',
  templateUrl: './movie-landing-page.component.html',
  styleUrls: ['./movie-landing-page.component.css']
})
export class MovieLandingPageComponent implements OnInit {
  movieUrl: string = '';
  moviesData: any;
  showcaseImgUrl:string='';
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieUrl = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.movieService.getMovies(this.movieUrl).subscribe((data) => {
      this.moviesData = data.results;
      this.showcaseImgUrl=`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.moviesData[0].backdrop_path}`;
    })
  }

}
