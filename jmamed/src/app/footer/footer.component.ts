import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  twitterURL: string;
  linkedInURL: string;
  githubURL: string;

  constructor() { }

  ngOnInit() {
    this.twitterURL = "";
    this.linkedInURL = "";
    this.githubURL = "";
  }

}
