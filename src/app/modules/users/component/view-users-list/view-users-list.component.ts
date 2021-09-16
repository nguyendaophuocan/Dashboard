import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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
      console.log('DATA SOURCE', this.dataSource);
    });
  }
}
