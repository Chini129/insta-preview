import { Component, OnInit } from '@angular/core';
import { Instagram } from 'src/app/models/model';
import { InstaDataService } from 'src/app/services/insta-data.service';
@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  instaData: Instagram[] = []
  constructor(private instaDataService:InstaDataService ) { }

  ngOnInit(): void {
    this.instaDataService.getInstagramData()
    .subscribe(
    (instaData)=>{
      this.instaData=instaData
      console.log(instaData);
      console.log("data came");
    },
    error => {
        console.log(error);
    }
    );
  }
openModal(insta:Instagram)
{
  console.log("modal called");
  this.instaDataService.passInstagramData(insta);
}
sortLikes()
{
  console.log("sort called!");
  this.instaData.sort(function (a, b) {
    return a.likes - b.likes;
  });
}
}
