import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../service/weather.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {concatMap, filter, map} from "rxjs/operators";

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {


  today: Date = new Date();
  locationName!: string;

  constructor(
    // private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.locationName = this.route.snapshot.params['locationName']
  }

}
