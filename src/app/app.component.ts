import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  user: any[];

  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(db: AngularFireDatabase) {
    db.list('/customers')
      .valueChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.user = user;
        console.log('user:', user);
      });
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
