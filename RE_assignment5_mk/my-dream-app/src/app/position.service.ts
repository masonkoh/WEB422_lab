import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Position } from "./data/position";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PositionService {

  constructor(private http: HttpClient) { }
  
  getPositions() : Observable<Position[]>{
    return this.http.get<Position[]>("https://stormy-depths-28130.herokuapp.com/positions");
  }


}
