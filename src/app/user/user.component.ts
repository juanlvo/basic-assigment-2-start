import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  emptyUsername() {
    if (this.username == null) {
      return false;
    } else {
      return true;
    }
  }

  setNullUsername() {
    this.username = null;
  }
}
