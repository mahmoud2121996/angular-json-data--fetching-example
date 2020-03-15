import { Component, OnInit } from '@angular/core';
import { GetAlbumsService } from '../get-albums.service';
@Component({
  selector: 'app-app-albums',
  templateUrl: './app-albums.component.html',
  styleUrls: ['./app-albums.component.css']
})
export class AppAlbumsComponent implements OnInit {
  public albums = [];
  public errorMsg;
  constructor(private albumService: GetAlbumsService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => this.albums = data, error => this.errorMsg = error);
  }

}
