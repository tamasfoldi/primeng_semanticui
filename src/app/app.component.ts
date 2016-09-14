import { Component, OnInit } from '@angular/core';
import { RandomUserService } from './services';
import { Observable } from 'rxjs/Rx';
import { User, MultiSortMetadata, SortEvent, SortableColumn } from './interfaces';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  users: Observable<User[]>;
  selectedUsers: User[];
  columnOptions: SelectItem[] = [];
  cols: SortableColumn[] = [];

  constructor(private _randomUserService: RandomUserService) {
    this.cols = [
      { field: 'fullName', header: 'Full Name' },
      { field: 'email', header: 'Email' },
      { field: 'gender', header: 'Gender' },
      { field: 'nat', header: 'Nationality' }
    ];
  }

  ngOnInit() {
    for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
    }

    this.users = this._randomUserService.users;
  }

  onSort(event: SortEvent) {
    this.setColOrderClasses(event.multisortmeta);
  }

  setColOrderClasses(multiSortMetaDatas: MultiSortMetadata[]) {
    this.cols.map(col => {
      let sortMetaDatas = multiSortMetaDatas.filter(sortMetaDat => sortMetaDat.field === col.field);
      if (sortMetaDatas.length && col.field === sortMetaDatas[0].field) {
        col.orderClass = this.getSortClassBasedOnMetaData(sortMetaDatas[0]);
      } else {
        col.orderClass = '';
      }
    });
  }

  private getSortClassBasedOnMetaData(sortMetaData: MultiSortMetadata): string {
    let classString = 'sorted ';
    classString += sortMetaData.order === 1 ? 'ascending' : 'descending';
    return classString;
  }
}
