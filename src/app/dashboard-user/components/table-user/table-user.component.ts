import { OnInit, AfterViewInit, Component, ViewChild, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';

import { TableUserDataSource } from './table-user-datasource';
import { DashboardUserService } from '../../dashboard-user.service';

import { User } from '../../models/user.interface';
import {tap} from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})

export class TableUserComponent implements OnInit, AfterViewInit {

  @Output() view: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: TableUserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'departament', 'actions'];

  constructor(private userService: DashboardUserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.dataSource = new TableUserDataSource(this.userService);
    this.dataSource.loadLessons('', 'asc', 0, 5);
  }

  ngAfterViewInit() {

    this.paginator.page
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadLessons(this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
  }

  editUser(id) {
    this.view.emit(id);
  }

}
