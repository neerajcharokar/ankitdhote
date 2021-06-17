import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ankitdhote';
  constructor(public dialog:MatDialog){

  }

  openContact(){
    this.dialog.open(ContactDialog,{
      width: '800px',
      height: '250px'
    })
    
  }
}
@Component({
  selector: 'contact-dialog',
  templateUrl: 'contactDialog.html',
})
export class ContactDialog {}