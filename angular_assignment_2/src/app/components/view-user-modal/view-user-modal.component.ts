import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserRecord } from 'src/app/records';

@Component({
  selector: 'app-view-user-modal',
  templateUrl: './view-user-modal.component.html',
  styleUrls: ['./view-user-modal.component.css']
})
export class ViewUserModalComponent implements OnInit {

  @Input() userDetails!:any;
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleCancel(){
    this.onCancel.emit();
  }

  handleSubmit(){
    this.onSubmit.emit();
  }

}
