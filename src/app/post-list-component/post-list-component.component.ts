import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date;
  };
  constructor() { }

  ngOnInit() {
  }

  loveit(){
    this.post.loveIts+=1;

  }

  notloveit(){
    this.post.loveIts-=1;
  }

}
