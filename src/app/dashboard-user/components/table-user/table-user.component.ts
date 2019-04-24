// AfterViewInit
import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableUserDataSource } from './table-user-datasource';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})

// AfterViewInit
export class TableUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableUserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['picture', 'name', 'email'];

  ngOnInit() {
    this.dataSource = new TableUserDataSource(this.paginator, this.sort);
  }
  // @TODO Verificar qual o melhor para se usar
  // ngAfterViewInit() {
  //   this.dataSource = new TableUserDataSource(this.paginator, this.sort);
  // }
}
