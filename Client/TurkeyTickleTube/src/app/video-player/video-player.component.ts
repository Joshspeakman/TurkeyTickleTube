import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  player: YT.Player;
  id = 'TyyIO9axlWg';

  constructor() { }

  ngOnInit() {

  }

  savePlayer(player: YT.Player) {
    this.player = player;
  }

  onStateChange(event: YT.OnStateChangeEvent) {
    switch (event.data) {
      case YT.PlayerState.BUFFERING:
        console.log('buffering');
        break;
      case YT.PlayerState.CUED:
        console.log('cued');
        break;
      case YT.PlayerState.ENDED:
        this.onEnded();
        break;
      case YT.PlayerState.PAUSED:
        this.onPaused();
        break;
      case YT.PlayerState.PLAYING:
        this.onPlaying();
        break;
      case YT.PlayerState.UNSTARTED:
        console.log('unstarted');
        break;
    }
  }

  onPlaying() {
    console.log('playing');
  }

  onPaused() {
    console.log('paused');
  }

  onEnded() {
    console.log('ended');
  }
}
