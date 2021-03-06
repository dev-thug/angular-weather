import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) {
  }

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=236c8bb6389d14fe979945b8805be0e1`;
    return this.http.get(path).pipe(
      map(data => ({
        ...data,
        // image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      }))
    );
  }
}
