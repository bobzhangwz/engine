import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import echarts from 'echarts';

import { LedgeTable } from '../../components/model/ledge-chart.model';

@Component({
  selector: 'ledge-heatmap',
  templateUrl: './ledge-heatmap.component.html',
  styleUrls: ['./ledge-heatmap.component.scss']
})
export class LedgeHeatmapComponent implements OnInit, AfterViewInit {
  @Input() data: LedgeTable;

  @Input() config: any;

  @ViewChild('chart', {}) chartEl: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const myChart = echarts.init(this.chartEl.nativeElement);
    const option = this.buildOption(this.data);
    myChart.setOption(option as any);
  }

  private buildOption(treeData: LedgeTable) {
    const seriesData = this.buildSeriesData(JSON.parse(JSON.stringify(treeData)));
    return {
      title: {
        left: 'center',
        name: treeData.header[0]
      },
      tooltip: {
        position: 'top'
      },
      animation: false,
      grid: {
        height: '50%',
        top: '10%'
      },
      xAxis: {
        type: 'category',
        data: treeData.header.slice(1),
        splitArea: {
          show: true
        }
      },
      yAxis: {
        type: 'category',
        data: treeData.cells[0].reverse(),
        splitArea: {
          show: true
        }
      },
      series: [{
        type: 'heatmap',
        data: seriesData,
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }

  private buildSeriesData(data: LedgeTable) {
    const seriesData: any[][] = [];
    data.cells.shift();
    const columnLenth = data.cells[0].length;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < data.cells.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < (data.cells)[i].length; j++) {
        let value = (data.cells)[i][j];
        if (typeof value === 'string') {
          if (value.endsWith('%')) {
            value = parseInt(value.slice(0, -1), 10);
          }
        }
        seriesData.push([i, columnLenth - j - 1, value]);
      }
    }

    return seriesData.reverse();
  }
}
