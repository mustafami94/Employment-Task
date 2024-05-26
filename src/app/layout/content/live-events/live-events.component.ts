import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: any; //ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  grid: any; //ApexGrid;
  colors: any;
  toolbar: any;
};
@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.css']
})
export class LiveEventsComponent {
  
  dataSeries = [
    [
      {
        date: "2014-01-01",
        value: 40
      },
      {
        date: "2015-01-02",
        value: 35
      },
      {
        date: "2016-01-03",
        value: 50
      },
      {
        date: "2014-01-04",
        value: 80
      },
      {
        date: "2014-01-05",
        value: 30
      },
      {
        date: "2014-01-06",
        value: 40
      },
      {
        date: "2014-01-07",
        value: 60
      },
      {
        date: "2014-01-08",
        value: 50
      }
    ]
  ];
  chart3options!: Partial<ChartOptions>;
  commonOptions: Partial<ChartOptions> = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      show: true,
      lineCap:'round',
      width:2
    },
    toolbar: {
      tools: {
        selection: false
      }
    },
    markers: {
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false
      },
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          }
        }
      },

    },
    grid: {
      clipMarkers: false,
      show: true,
      xaxis: {
        lines: {
          show: false 
         }
       },  
      yaxis: {
        lines: { 
          show: false  
         }
       },
    },
    xaxis: {
      type: "numeric",
      labels: {
        show: false
      },
      axisBorder:{
        show:false
      },
      axisTicks:{
        show:false
      }
    }
  };

  constructor() {
    this.initCharts();
  }

  initCharts() {
    this.chart3options = {
      series: [
        {
          name: "chart3",
          data: this.generateDataSets(2)
        }
      ],
      chart: {
        id: "yt",
        group: "",
        type: "area",
        height: 160,
        toolbar: {
          show: false
        }
      },
      colors: ["#F26666"],
      yaxis: {
        labels: {
          show: false
        }
      },
      xaxis: {
        labels: {
          show: false
        }
      },
    };
  }
  generateDataSets = function (t) {

    var ts3 = 1;
    var dataSet = [[], [], []];
    for (let i = 0; i < 8; i++) {
      ts3 = ts3 + 2;
      const innerArr = [ts3, this.dataSeries[0][i]?.value];
      dataSet[2].push(innerArr);
    }
    return dataSet[2];

  };

}
