import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { sensor1, sensor2, sensor3, sensores } from './data';
import { DatoNgx } from './Interface/grafica.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CO2App';
  graphs: DatoNgx[];
  view: any[] = [700, 300];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'N';
  yAxisLabel: string = 'PPM';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  // colorScheme = {
  //   domain: [{ 1:'#5AA454', 2:'#E44D25',  3:'#CFC0BB',  4:'#7aa3e5', 5:'#a8385d', 6:'#aae3f5'}]
  // };
  constructor() {
    let ngx=[];
    for (let sensor of sensores) {
      let i = 1;
      let series = [];
      for (let values of sensor.values) {
        series.push({
          value: values,
          name: i.toString()
        });
        i = i + 1;
      }
      //console.log({ name: sensor.label, series: series });

      ngx.push({ name: sensor.label, series: series });// = Object.assign(ngx, { name: sensor.label, series: series });
    }
    this.graphs = ngx;
    console.log(ngx);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
