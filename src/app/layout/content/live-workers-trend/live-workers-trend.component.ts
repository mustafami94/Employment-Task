import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  toolbar: any;
};


@Component({
  selector: 'app-live-workers-trend',
  templateUrl: './live-workers-trend.component.html',
  styleUrls: ['./live-workers-trend.component.css']
})
export class LiveWorkersTrendComponent {
  @ViewChild("chart") chart: ChartComponent;

  chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Green Zone",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
          color: "#66C088"
        },
        {
          name: "Amber Zone",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
          color: "#DA7739"
        },
        {
          name: "Red Zone",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
          color: "#BC4C34"
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: "straight",
        dashArray: [0, 4, 0],
        lineCap: "round"
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
        position: "top",
        horizontalAlign: "center",
        labels: {
          colors:["#B2BAC9","#B2BAC9","#B2BAC9"]
        }
      },
      markers: {

      },

      xaxis: {
        categories: [
          "6:00 AM",
          "7:00 AM",
          "8:00 AM",
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 AM",
          "2:00 AM",
          "3:00 AM",
          "4:00 AM",
          "5:00 AM"

        ],
        labels:{
          trim: false,
          style:{
            colors:"#B2BAC9"
          }
        }
      },
      yaxis:{
        labels:{
          style:{
            colors:"#B2BAC9"
          }
        }
      },

      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ],
        marker: {
          show: false,
        },
      },
      grid: {
        borderColor: "#f1f1f1"
      }

    };
  }
}

