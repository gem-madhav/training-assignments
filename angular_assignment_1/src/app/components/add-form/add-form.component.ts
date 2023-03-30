import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  @Output() onAddText: EventEmitter<String> = new EventEmitter();

  text!: String;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // if (this.text.trim().length === 0) {
    if (!this.text) {
      alert('Please add some text!');
      return;
    }

    this.onAddText.emit(this.text);

    this.text = "";
  }
}
