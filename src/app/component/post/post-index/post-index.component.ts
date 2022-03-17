import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'src/app/model/post/post.model';
import { PostService } from 'src/app/service/post/post.service';

@Component({
    selector: 'app-post-index',
    templateUrl: './post-index.component.html',
    styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent implements OnInit {

    isEmpty?: boolean;
    isEditable?: boolean;

    items?: Post[];
    currentItem: Post = {};
    currentIndex = -1;
    author = '';

    constructor(private service: PostService) { }

    ngOnInit(): void {
        this.index();
    }

    index(): void {
        this.service.index()
        .subscribe({
            next: (data) => {
                if (data != null) {
                    this.isEmpty = false;
                    this.items = data;
                } else {
                    this.isEmpty = true;
                }
            },
            error: (e) => console.error(e)
        });
    }

    refresh(): void {
        this.index();
        this.currentItem = {};
        this.currentIndex = -1;
    }

    activate(item: Post, index: number): void {
        this.isEditable = false;
        this.currentItem = item;
        this.currentIndex = index;
    }

    getIsEditable(isEditable: boolean) {
        this.isEditable = isEditable; 
    }

    findByAuthor(): void {
        if (this.author.length > 0) {
            this.currentItem = {};
            this.currentIndex = -1;
            this.service.findByAuthor(this.author).subscribe({
                next: (data) => {
                    if (data != null) {
                        this.isEmpty=false; 
                        this.items = data;
                    } else {
                        this.isEmpty = true;
                    }
                },
                error: (e) => console.error(e)
            });
        } else {
            this.index();
        }
    }

}
