import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LedgeBarChartComponent } from './chart/ledge-bar-chart/ledge-bar-chart.component';
import { LedgeGraphvizComponent } from './chart/ledge-graphviz/ledge-graphviz.component';
import { LedgeMindmapComponent } from './chart/ledge-mindmap/ledge-mindmap.component';
import { LedgePureEchartsComponent } from './chart/ledge-pure-echarts/ledge-pure-echarts.component';
import { LedgePyramidComponent } from './chart/ledge-pyramid/ledge-pyramid.component';
import { LedgeQuadrantComponent } from './chart/ledge-quadrant/ledge-quadrant.component';
import { LedgeRadarComponent } from './chart/ledge-radar/ledge-radar.component';
import { CustomMaterialModule } from './custom-material.module';
import { LedgeRenderComponent } from './ledge-render.component';
import { ToolsetComponent } from './toolset/toolset.component';
import { SkillCardComponent } from './components/ledge-card/ledge-card.component';

const LedgeComponents = [
  LedgeRenderComponent,
  LedgeBarChartComponent,
  LedgeMindmapComponent,
  LedgePyramidComponent,
  LedgeRadarComponent,
  LedgeQuadrantComponent,
  LedgeGraphvizComponent,
  LedgePureEchartsComponent,
  ToolsetComponent,
  SkillCardComponent,
];


@NgModule({
  declarations: [
    ...LedgeComponents],
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
  ],
  exports: [
    LedgeRenderComponent]
})
export class LedgeRenderModule { }
