import { Component, OnInit } from '@angular/core';
import { Instagram } from 'src/app/models/model';
@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
currentData:Instagram=new Instagram();
  constructor() { 
    if(localStorage.getItem("Image")!=null)
    {
      this.currentData.Image=String(localStorage.getItem("Image"));
    }
  }

  ngOnInit(): void {
  
  }
    
}
