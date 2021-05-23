import { Component } from '@angular/core';
import { multi } from '../../data';
import { sensores } from './ppm';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent{
  
//   sensores: any[];
//   ejemplo: any[];
//   view: any[] = [700, 370];

//   // options
//   legend: boolean = true;
//   showLabels: boolean = true;
//   animations: boolean = true;
//   xAxis: boolean = true;
//   yAxis: boolean = true;
//   showYAxisLabel: boolean = true;
//   showXAxisLabel: boolean = true;
//   xAxisLabel: string = 'Year';
//   yAxisLabel: string = 'Population';
//   timeline: boolean = true;

//   colorScheme = {
//     domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
//   };

  constructor() { Object.assign(this, {sensores, multi})}


//   onSelect(data): void {
//     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
//   }

//   onActivate(data): void {
//     console.log('Activate', JSON.parse(JSON.stringify(data)));
//   }

//   onDeactivate(data): void {
//     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
//   }
}
