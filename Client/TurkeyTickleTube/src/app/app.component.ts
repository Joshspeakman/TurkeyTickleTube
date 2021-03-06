import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  player: YT.Player;
  id = 'TyyIO9axlWg';

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
        console.log('ended');
        break;
      case YT.PlayerState.PAUSED:
        console.log('paused');
        break;
      case YT.PlayerState.PLAYING:
        console.log('playing');
        break;
      case YT.PlayerState.UNSTARTED:
        console.log('unstarted');
        break;
    }
  }
}
