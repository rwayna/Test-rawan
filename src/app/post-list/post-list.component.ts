import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  postslist = [
    { id: 1, title: 'First Post', content: 'This is the first post' },
    { id: 2, title: 'Second Post', content: 'This is the second post' }
  ];
  constructor(private router: Router) {}

  navigateToPostItem(postId: number) {
    this.router.navigate([`/postItem/${postId}`]);
  }
}
