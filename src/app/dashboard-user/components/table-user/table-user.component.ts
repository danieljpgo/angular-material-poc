import { OnInit, AfterViewInit, Component, ViewChild, Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableUserDataSource } from './table-user-datasource';

import { User } from '../../models/user.interface';
import { DashboardUserService } from '../../dashboard-user.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})

// AfterViewInit
export class TableUserComponent implements OnInit, AfterViewInit {
  // @ViewChild(MatSort) sort: MatSort;

  @Output() view: EventEmitter<User> = new EventEmitter<User>();



  @ViewChild(MatPaginator) paginator: MatPaginator;

  // course: User;
  dataSource: TableUserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'departament', 'actions'];

  constructor(private userService: DashboardUserService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.paginator, this.sort
    // this.course = this.route.snapshot.data["users"];
    this.dataSource = new TableUserDataSource(this.userService);
    this.dataSource.loadLessons('', 'asc', 0, 3);
  }

  // this.dataSource = new TableUserDataSource(this.paginator, this.sort);

  ngAfterViewInit() {
    this.paginator.page
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadLessons('', 'asc', this.paginator.pageIndex, this.paginator.pageSize);
  }

  editUser(id) {
    this.view.emit(id);
  }

}
