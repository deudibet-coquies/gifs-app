import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
//public tags: string[] = [];

@ViewChild("buttonTagInput")
public tagButton!: ElementRef<HTMLButtonElement>;


constructor(private _gifsService: GifsService) {
  console.log('aca esta mi lista',this._gifsService.tagsHistory);
}

 get tags():string[]{
  return this._gifsService.tagsHistory
}

searchTag(tag:string):void {
  console.log({ tag });
  this._gifsService.searchTag(tag);
}


}
