import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  public searchName:string= 'Enter Username here'
  @Output() searchResults = new EventEmitter<any>()

  constructor() { }
  searchUser(){
    this.searchResults.emit(this.searchName);
  }
  ngOnInit(): void {
  }

}
