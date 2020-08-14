import { Component, OnInit, Input } from '@angular/core';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../../Config';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
@Input()  movie;

imgUrl:string;

  constructor() { }

  ngOnInit() {
    this.imgUrl =`${IMAGE_BASE_URL}${POSTER_SIZE}${this.movie.poster_path}`
  }

}
