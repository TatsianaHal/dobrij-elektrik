import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data = {
    name: 'tanya',
    bio: 'web-developer'
  };

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    // to add/change title and meta tags in <head>...</head> dynamically:
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'og:url', content: '/main' },
      { name: 'og:title', content: this.data.name }
    ]);
  }
}
