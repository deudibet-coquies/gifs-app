import { Gif } from './../../interface/gifs.interfaces';
import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(private _gifsService: GifsService) { }

  get gifs():Gif[]{
    return this._gifsService.gifList
  }

}
