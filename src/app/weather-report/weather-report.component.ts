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
  data$!: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      map(params => params["locationName"]),
      filter(name => !!name),
      concatMap(name => this.weatherService.getWeatherForCity(name))
    )
    this.locationName = this.route.snapshot.params['locationName']
  }

}
