import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  showSecret = false;
  logs = [1];

  onClickToggle() {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
  }
}
