import { Component, OnInit } from '@angular/core';
import { UserRecord } from 'src/app/records';
import { UserRecordService } from 'src/app/services/user-record.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  users: any[] = [];
  constructor(private userRecordService: UserRecordService) {}

  ngOnInit(): void {
    this.users = this.userRecordService.getUserRecords();
  }
}
