import { Component, OnInit } from '@angular/core';
import { faReact } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faReact = faReact;

}
