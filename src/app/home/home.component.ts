import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { routerTransition } from '../animations';
import { MarkdownModule } from 'angular2-markdown';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [routerTransition],
	host: { '[@routerTransition]': '' }
})
export class HomeComponent implements OnInit {

	posts: Array<Post>;

	constructor(private _postService: PostService) { }

	ngOnInit() {
		this._postService.getPosts()
			.subscribe(res => this.posts = res);
	}

}
