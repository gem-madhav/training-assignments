import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRecordService } from 'src/app/services/user-record.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  showModal: boolean = false;
  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    category: new FormControl('', Validators.required),
    technology: new FormControl(''),
  });

  constructor(
    private userRecordService: UserRecordService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      this.showModal = !this.showModal;
    } else {
      alert('Please fill all the details.');
    }
  }

  closeModal() {
    this.showModal = !this.showModal;
  }

  addRecord() {
    this.closeModal();
    const userRecord = {
      name: this.userForm.value.name,
      gender: this.userForm.value.gender,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      category: this.userForm.value.category,
      technology: [],
    };
    this.userRecordService.addUserRecord(userRecord);
    this.router.navigateByUrl('/users/view');
  }
}
