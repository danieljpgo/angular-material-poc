// AfterViewInit
import {OnInit, Component, ViewChild, Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableUserDataSource } from './table-user-datasource';

import { User } from '../../models/user.interface';

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

  @Output() view: EventEmitter<User> = new EventEmitter<User>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'departament', 'actions'];

  ngOnInit() {
    this.dataSource = new TableUserDataSource(this.paginator, this.sort);
  }

  editUser(id) {
    this.view.emit(id);
  }

  // @TODO Verificar qual o melhor para se usar
  // ngAfterViewInit() {
  //   this.dataSource = new TableUserDataSource(this.paginator, this.sort);
  // }
}
