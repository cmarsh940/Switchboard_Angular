import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches = [true, true, true, false, false, false, true, false, true, false]
  onSwitch(idx) {
    this.switches[idx] = !this.switches[idx]
  }
}
