import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-users-list',
  templateUrl: './view-users-list.component.html',
  styleUrls: ['./view-users-list.component.scss'],
})
export class ViewUsersListComponent implements OnInit {
  lists: Array<any> = [];
  dataSource;
  displayedColumns: string[] = [
    'id',
    'username',
    'password',
    'date_created',
    'action',
  ];
  editing: boolean = false;
  editingId: string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((reuslt) => {
      this.lists = reuslt.map((item) => {
        console.log('ITEM', item);
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as {}),
        };
      });
      this.dataSource = new MatTableDataSource<any>(this.lists);
      this.dataSource.paginator = this.paginator;
      console.log('DATA SOURCE', this.dataSource);
    });
  }
  applyFilter(filterValue: string): void {
    filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  onEditUser(id: string): void {
    this.editing = true;
    this.editingId = id;
  }
  onDeleteUser(id: string): void {
    this.userService.deleteUser(id);
  }
  onCancel() {
    this.editing = false;
    this.editingId = null;
  }
  onSaveUser(user) {
    this.userService.updateUser(user).then(() => {
      this.editing = false;
      this.editingId = null;
      alert('Saved successfully');
    });
  }
}
