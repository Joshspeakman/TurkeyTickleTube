import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    PlaylistComponent,
    RoomComponent,
    RoomListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
