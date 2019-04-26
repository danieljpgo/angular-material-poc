import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import {catchError, finalize, map} from 'rxjs/operators';
import {Observable, of as observableOf, merge, from, BehaviorSubject, of} from 'rxjs';

import { TableUserItem } from '../../models/table-items.interface';

import {DashboardUserService} from '../../dashboard-user.service';

// // TODO: replace this with real data from your application
// const EXAMPLE_DATA: TableUserItem[] = [
//   {id: 1, name: 'Valesca', email: 'valesca@gmail.com', departament: 'Programmer'},
//   {id: 2, name: 'Luiza', email: 'luiza@gmail.com', departament: 'Administration'},
//   {id: 3, name: 'Vera', email: 'vera@gmail.com', departament: 'Programmer'},
//   {id: 4, name: 'Tulio', email: 'tulio@gmail.com', departament: 'Administration'}
// ];

/**
 * Data source for the TableUser view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableUserDataSource extends DataSource<TableUserItem> {
  // data: TableUserItem[] = EXAMPLE_DATA;

  private lessonsSubject = new BehaviorSubject<TableUserItem[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  // private paginator: MatPaginator, private sort: MatSort,
  constructor(private userService: DashboardUserService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(collectionViewer: CollectionViewer): Observable<TableUserItem[]> {
    return this.lessonsSubject.asObservable();
    // // Combine everything that affects the rendered data into one update
    // // stream for the data-table to consume.
    // const dataMutations = [
    //   observableOf(this.data),
    //   this.paginator.page,
    //   this.sort.sortChange
    // ];
    //
    // // Set the paginator's length
    // this.paginator.length = this.data.length;
    //
    // return merge(...dataMutations).pipe(map(() => {
    //   return this.getPagedData(this.getSortedData([...this.data]));
    // }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(collectionViewer: CollectionViewer) {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

  loadLessons(sort, order, page, limit) {
    this.loadingSubject.next(true);

    this.userService.getUsers(sort, order, page, limit)
      .pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false)))
      .subscribe(lessons => this.lessonsSubject.next(lessons));
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: TableUserItem[]) {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   return data.splice(startIndex, this.paginator.pageSize);
  // }
  //
  // /**
  //  * Sort the data (client-side). If you're using server-side sorting,
  //  * this would be replaced by requesting the appropriate data from the server.
  //  */
  // private getSortedData(data: TableUserItem[]) {
  //   if (!this.sort.active || this.sort.direction === '') {
  //     return data;
  //   }
  //
  //   return data.sort((a, b) => {
  //     const isAsc = this.sort.direction === 'asc';
  //     switch (this.sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'email': return compare(+a.email, +b.email, isAsc);
  //       case 'id': return compare(+a.id, +b.id, isAsc);
  //       case 'departament': return compare(+a.departament, +b.departament, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
