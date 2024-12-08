import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  postId: number = 0;
  post = { title: '', content: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.loadPost(this.postId);
    });
  }

  loadPost(id: number) {
    const posts = [
      { id: 1, title: 'First Post', content: 'This is the first post' },
      { id: 2, title: 'Second Post', content: 'This is the second post' }
    ];
    this.post = posts.find(post => post.id === id) || { title: 'Post Not Found', content: '' };
  }
}
