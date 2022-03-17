import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from 'src/app/service/post/post.service';
import { Post } from 'src/app/model/post/post.model';

@Component({
    selector: 'app-post-show',
    templateUrl: './post-show.component.html',
    styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {

    @Output() isEditable = new EventEmitter<boolean>();
    @Input() currentItem: Post = {
        author: '',
        title: '',
        createdat: '',
        ispublished: '',
        brief: '',
        content: ''
    };

    constructor(private service: PostService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    }

    edit(isEditable: boolean): void {
        this.isEditable.emit(isEditable);        
    }

}
