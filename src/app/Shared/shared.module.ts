import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CpuUtlizComponent } from './widgets/cpu-utliz/cpu-utliz.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';
import { TableComponent } from './widgets/table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EnvDataComponent } from './env-data/env-data.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CpuUtlizComponent,
    PieChartComponent,
    TableComponent,
    EnvDataComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatSortModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CpuUtlizComponent,
    PieChartComponent,
    TableComponent,
    EnvDataComponent
  ]
})
export class SharedModule { }
