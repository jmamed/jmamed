import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './../services/geolocation.service';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  latitude: any;
  longitude: any;
  accuracy: any;
  altitude: any;
  altitudeAccuracy: any;
  heading: any;
  speed: any;
  showArea: boolean = false;
  errorArea: boolean = false;
  useragent: any;

  constructor(
    private geoService: GeolocationService,
  ) { }

  ngOnInit() {
    this.geoService.getGeolocation();//trigger popup on load
  }

  getGeoData(){
    this.latitude = this.geoService.latitude;
    this.longitude = this.geoService.longitude;
    this.accuracy = this.geoService.accuracy;
    this.altitude = this.geoService.altitude;
    this.altitudeAccuracy = this.geoService.altitudeAccuracy;
    this.heading = this.geoService.heading;
    this.speed = this.geoService.speed;
  }

  showgeolocation() {//toggle view
    this.getGeoData();
    if (this.geoService.geoError) {
      this.errorArea = true;
      if (!this.geoService.geoConsent) {
        this.showArea = false;
      }
    }
    else {
      if (this.geoService.geoConsent) {
        this.showArea = true;
      }
    }
  }
}
