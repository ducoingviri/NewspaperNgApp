import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from 'src/app/model/post/post.model';
import { PostService } from 'src/app/service/post/post.service';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

    modifiedItem: Post = {
        id: '',
        author: '',
        title: '',
        createdat: '',
        ispublished: '',
        brief: '',
        content: ''
    };

    @Input() currentItem: Post = {
        id: '',
        author: '',
        title: '',
        createdat: '',
        ispublished: '',
        brief: '',
        content: ''
    };

    constructor(private service: PostService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        if (this.currentItem.id) {
            this.show(this.currentItem.id);
        }
    }

    update(): void {
        this.service.update(this.currentItem.id, this.modifiedItem)
        .subscribe({
            next: (res) => {
                if (res.id) {
                    window.location.reload();
                } else {
                    console.log(res);
                }
            },
            error: (e) => console.error(e)
        });
    }

    show(id: string): void {
        this.service.show(id)
        .subscribe({
            next: (data) => {
                this.modifiedItem = data;
            },
            error: (e) => console.error(e)
        });
    }

}
