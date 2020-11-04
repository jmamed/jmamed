import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  latitude: any;
  longitude: any;
  accuracy: any;
  altitude: any;
  altitudeAccuracy: any;
  heading: any;
  speed: any;
  geoConsent: boolean = false;
  geoError: boolean = false;


  constructor() { }

  getGeolocation(){//popup decision based on user consent (allow/block)
    if(!navigator.geolocation){
      console.log("Geolocation Error");
      this.geoError = true;
    }
    else{
      navigator.geolocation.getCurrentPosition((position)=> {
        this.storeGeoData(position.coords.latitude, position.coords.longitude,
        position.coords.accuracy, position.coords.altitude, position.coords.altitudeAccuracy, 
        position.coords.heading, position.coords.speed)}, 
        this.geolocationError.bind(this));
    }
  }

  storeGeoData(latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed){

    this.longitude = longitude;
    this.latitude = latitude;
    this.accuracy = accuracy;
    this.altitude = altitude;
    this.altitudeAccuracy = altitudeAccuracy;
    this.heading = heading;
    this.speed = speed;
    this.geoConsent = true;
    console.log("User has given consent to use their Geolocation data in browser");
    console.log("Geolocation Success Data acquired");

  }

  geolocationError(){
    this.geoConsent = false;
    console.log("User has NOT GIVEN consent to use their Geolocation data in browser");
  }
}
