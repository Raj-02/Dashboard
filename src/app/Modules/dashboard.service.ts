import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  Bigchart() {
    return[1, 2, 3, 4, 5, 3, 6];
   }
  Piechart(){
     return[{name: 'C drive',
     y: 500,
     selected: true
 }, {
     name: 'D drive',
     y: 300
 }, {
     name: 'E drive',
     y: 350
 }, {
     name: 'F drive',
     y: 400}];
  }
}
