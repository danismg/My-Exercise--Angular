import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  // template : untuk html
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  title = 'Hero Component';
  name = 'Daniel Andres';
  names = ['daniek', 'canda', 'donok'];

  getName() {
    return this.name;
  }

  getNames() {
    return this.names;
  }
  constructor() {}
  ngOnInit(): void {}
}
