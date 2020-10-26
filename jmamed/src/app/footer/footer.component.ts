import { Component, OnInit } from '@angular/core';
import { faDog, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  twitterURL: string;
  linkedInURL: string;
  githubURL: string;

  constructor() { }

  ngOnInit() {
    this.twitterURL = "https://twitter.com/jasonmamed";
    this.linkedInURL = "https://www.linkedin.com/in/jasonmamed";
    this.githubURL = "https://github.com/jmamed";
    // console.log(this.twitterURL);
  }
  scrollTop(){
    
  }

  //Free icons from: fort-awesome
  faDog = faDog;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faPaperPlane = faPaperPlane;

}
