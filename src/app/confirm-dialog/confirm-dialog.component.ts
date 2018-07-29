import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '../../../node_modules/@angular/compiler/src/core';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() showdialog = 'false';
  @Input() title = '';
  @Input() message = '';
  @Output() onConfirmClick: EventEmitter<void> = new EventEmitter();
  @Output() onCancelClick: EventEmitter<void> = new EventEmitter();

  confirmClick() {
    this.onConfirmClick.emit();
  }
  cancelClick() {
    this.onCancelClick.emit();
  }
  closeClick() {
    this.showdialog = 'false';
  }

}
