import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'turbo-frontend';

  isLoading: boolean = true;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    },3000)
  }
}
