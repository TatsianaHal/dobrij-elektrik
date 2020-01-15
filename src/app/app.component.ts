import { Component, OnDestroy } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  customers: any[];

  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  // constructor(private db: AngularFireDatabase) {
  //   db.list('/customers')
  //     .valueChanges()
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(customers => {
  //       this.customers = customers;
  //       console.log('customers:', customers);
  //     });
  // }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
