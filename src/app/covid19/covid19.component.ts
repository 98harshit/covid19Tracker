import { Component, OnInit, ViewChild } from '@angular/core';
import { Covid19ServiceService } from '../covid19-service.service';
import { CountryReports } from '../countryReports';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ELEMENT_DATA:CountryReports[];
  displayedColumns: string[] = ['country',
    'cases',
    'todayCases',
    'deaths',
    'todayDeaths',
    'recovered',
    'active',
    'critical',
    'casesPerOneMillion',
    'deathsPerOneMillion',
    'tests',
    'testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  

  constructor(private service:Covid19ServiceService) { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
    this.getAllReports();
    
  }

  public getAllReports()
  {
    this.service.covid19Reports().subscribe((res)=>{
      this.dataSource.data=res as CountryReports[]
    })
  }

  applyFilter(filterValue:String)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
