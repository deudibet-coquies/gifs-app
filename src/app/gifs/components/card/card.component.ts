import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gif } from '../../interface/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
 
  
  constructor() {}

  @Output()
  public onNewGif: EventEmitter<Gif> = new EventEmitter();

  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if( !this.gif )throw new Error('gif es requerido');
  }

}
