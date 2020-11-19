// import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
// import { Button } from 'protractor';
import { GeolocationService } from './../services/geolocation.service';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  //geo
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

  //progress ring
  circle : any;
  radius : any;
  circumference : number;
  max: number;
  current: number;
  newValue: string;
  next: number;
  circleDone: boolean = false;


  constructor(
    private geoService: GeolocationService,
  ) { }

  ngOnInit() {
    //geolocation
    this.geoService.getGeolocation();//trigger popup on load

    //progress ring
    this.progressRing();//initialize
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

  progressRing(){//run first, define circle
    let circle = document.querySelector('circle');
    let radius = circle.r.baseVal.value;
    this.circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    circle.style.strokeDashoffset = `${this.circumference}`;
    this.max = 10; //ma
    this.current = 0;
    // console.log("Max " + this.max + "," + "Current " + this.current)
    this.setProgress(this.current);
  }
  onClick(){
    // if (input.value < 101 && input.value > -1) {
    //   this.setProgress(input.value);
    // }

    if (this.max >= this.current){
      this.current = this.current + 1;
      this.next = this.current / this.max;
      this.setProgress(this.next);
    }
  }
  setProgress(percent: number){
    if(this.max >= this.current){//this.max remains the constant from page load
      // console.log("Percent " + percent);
      // console.log("Circumference " + this.circumference);
      const offset = this.circumference - (this.circumference * percent);
      this.newValue = offset.toString();
      // console.log(offset);
      let circle = document.querySelector('circle');
      circle.style.strokeDashoffset = this.newValue;
    }
    else{
      console.log("Circle is complete")
      this.circleDone = true;
      this.disabledBtn();
    }
  }
  disabledBtn(){
    document.getElementById('progressButton').disabled = true;
    // alert("Circle is complete"); //annoying alert message
  }

  onReset(){
    this.current = 0;
    this.circleDone = false;
    document.getElementById('progressButton').disabled = false;
    this.setProgress(0);
  }

}
