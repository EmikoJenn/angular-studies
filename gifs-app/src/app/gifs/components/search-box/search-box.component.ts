import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  txtTagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.txtTagInput.nativeElement.value = '';
  }
}
