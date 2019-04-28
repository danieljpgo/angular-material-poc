import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { DashboardUserService } from '../../dashboard-user.service';

// Interface
import { User } from '../../models/user.interface';

/**
 * Data source for the TableUser view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableUserDataSource extends DataSource<User> {

  private lessonsSubject = new BehaviorSubject<User[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  // @TODO Loading
  public loading$ = this.loadingSubject.asObservable();

  constructor(private userService: DashboardUserService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(collectionViewer: CollectionViewer): Observable<User[]> {
    return this.lessonsSubject.asObservable();
  }

  /**
   * Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(collectionViewer: CollectionViewer) {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

  loadUser(filter, sort, order, page, limit) {
    this.loadingSubject.next(true);

    this.userService.getUsers(filter, sort, order, page, limit)
      .pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false)))
      .subscribe(lessons => this.lessonsSubject.next(lessons));
  }
}
