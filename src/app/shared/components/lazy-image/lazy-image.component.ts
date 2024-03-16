import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public alt: string = "";

  @Input()
  public url!: string;

  public loadingImage: boolean = false;

  ngOnInit(): void {
    if( !this.url )throw new Error('url es requerido');
  }

  loading() {
   setTimeout(() => {
    this.loadingImage = true;
   }, 1000);    
  }


}
