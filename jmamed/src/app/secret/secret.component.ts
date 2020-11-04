import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  //Free icons from: fort-awesome
  faInstagram = faInstagram;

  //Gallery
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 16,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/samson1.jpg',
        medium: 'assets/samson1.jpg',
        big: 'assets/samson1.jpg',
      },
      {
        small: 'assets/samson2.jpg',
        medium: 'assets/samson2.jpg',
        big: 'assets/samson2.jpg',
      },
      {
        small: 'assets/samson3.jpg',
        medium: 'assets/samson3.jpg',
        big: 'assets/samson3.jpg',
      },
      {
        small: 'assets/samson4.jpg',
        medium: 'assets/samson4.jpg',
        big: 'assets/samson4.jpg',
      },
      {
        small: 'assets/samson5.jpg',
        medium: 'assets/samson5.jpg',
        big: 'assets/samson5.jpg',
      },
      {
        small: 'assets/samson6.jpg',
        medium: 'assets/samson6.jpg',
        big: 'assets/samson6.jpg',
      },
      {
        small: 'assets/samson7.jpg',
        medium: 'assets/samson7.jpg',
        big: 'assets/samson7.jpg',
      },
      {
        small: 'assets/samson8.jpg',
        medium: 'assets/samson8.jpg',
        big: 'assets/samson8.jpg',
      },
      {
        small: 'assets/samson9.jpg',
        medium: 'assets/samson9.jpg',
        big: 'assets/samson9.jpg',
      },
      {
        small: 'assets/samson10.jpg',
        medium: 'assets/samson10.jpg',
        big: 'assets/samson10.jpg',
      },
      {
        small: 'assets/samson11.jpg',
        medium: 'assets/samson11.jpg',
        big: 'assets/samson11.jpg',
      },
      {
        small: 'assets/samson12.jpg',
        medium: 'assets/samson12.jpg',
        big: 'assets/samson12.jpg',
      },
      {
        small: 'assets/samson13.jpg',
        medium: 'assets/samson13.jpg',
        big: 'assets/samson13.jpg',
      },
      {
        small: 'assets/samson14.jpg',
        medium: 'assets/samson14.jpg',
        big: 'assets/samson14.jpg',
      },
      {
        small: 'assets/samson15.jpg',
        medium: 'assets/samson15.jpg',
        big: 'assets/samson15.jpg',
      },
      {
        small: 'assets/samson16.jpg',
        medium: 'assets/samson16.jpg',
        big: 'assets/samson16.jpg',
      }
    ];
  }
}
