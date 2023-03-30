import { Injectable } from '@angular/core';
import { UserRecord } from '../records';

@Injectable({
  providedIn: 'root',
})
export class UserRecordService {
  userRecords: object[] = [];

  constructor() {}

  addUserRecord(record:object) {
    this.userRecords.push(record);
  }

  getUserRecords() {
    return this.userRecords;
  }
}
