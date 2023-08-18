import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apiKey: string = 'dqXTiTrfjuAOHLTCqtA3F5EoFd9r3c4w';
  private _giphyUrl = 'https://api.giphy.com/v1/gifs';
  private _tagsHistory: string[] = [];
  private _results: { data: Gif[]; tag: string } = { data: [], tag: '' };

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get results() {
    return [...this._results.data];
  }

  private organizeHistory(tag: string) {
    tag = tag.trim().toLowerCase();

    if (tag === this._results.tag) return 'repeated';

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(
        (storedTag) => storedTag !== tag
      );
    }

    this._tagsHistory.unshift(tag);
    return 'added';
  }

  private shapeHistory() {
    if (this._tagsHistory.length > 10)
      this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage(this._tagsHistory);
  }

  private GetGifs(tag: string, limit: string = '10') {
    limit = isNaN(Number(limit)) ? '10' : limit;

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', limit)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this._giphyUrl}/search`, { params })
      .subscribe((res) => (this._results = { data: res.data, tag }));
  }

  private saveLocalStorage(data: string[]) {
    localStorage.setItem('tagsHistory', JSON.stringify(data));
  }

  private loadLocalStorage() {
    this._tagsHistory = JSON.parse(
      localStorage.getItem('tagsHistory') || '["pacman"]'
    );
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string) {
    if (tag.trim().length === 0) return;

    const tagHasBeen = this.organizeHistory(tag);
    if (tagHasBeen === 'repeated') return;

    this.shapeHistory();
    this.GetGifs(tag);
  }
}
