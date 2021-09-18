import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-dashboard-list',
  templateUrl: './view-dashboard-list.component.html',
  styleUrls: ['./view-dashboard-list.component.scss'],
})
export class ViewDashboardListComponent implements OnInit {
  userList: Array<any> = [];
  userDataSource;
  userDisplayedColumns: string[] = [
    'id',
    'username',
    'password',
    'date_created',
  ];
  totalUsers: number = 0;
  totalNewUSers: number = 0;
  totalUsersCurrentMonth: number = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result) => {
      this.totalUsers = result.length;
      this.userList = result.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as {}),
        };
      });
      result.filter((item: any) => {
        new Date().getUTCMonth() + 1 ===
          item.payload.doc.data().timestamp.toDate().getUTCMonth() + 1 &&
          (this.totalUsersCurrentMonth += 1);
      });
      this.userDataSource = new MatTableDataSource<any>(this.userList);
      console.log('data', this.userList);
      this.userDataSource.paginator = this.paginator;
    });
  }
}
