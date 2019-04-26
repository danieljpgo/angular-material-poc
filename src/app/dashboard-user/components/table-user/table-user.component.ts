import {OnInit, AfterViewInit, Component, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { TableUserDataSource } from './table-user-datasource';
import { DashboardUserService } from '../../dashboard-user.service';

import { User } from '../../models/user.interface';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {fromEvent, merge} from 'rxjs';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})

export class TableUserComponent implements OnInit, AfterViewInit {

  @Output() view: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('inputSearch') inputSearch: ElementRef;

  dataSource: TableUserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'departament', 'actions'];

  constructor(private userService: DashboardUserService) {}

  ngOnInit() {
    this.dataSource = new TableUserDataSource(this.userService);
    this.dataSource.loadLessons('', '', 'asc', 0, 5);
  }

  ngAfterViewInit() {

    this.paginator.page
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();

    /** Reset the paginator after sorting */
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    /** On sort or paginate events, load a new page */
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();

    /** Server-side search */
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadLessonsPage();
        })
      )
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadLessons(
      this.inputSearch.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

  editUser(id) {
    this.view.emit(id);
  }

}
