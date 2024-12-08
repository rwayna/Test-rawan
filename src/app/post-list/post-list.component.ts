import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
 
  constructor(private router: Router,private postService: PostService) {}
  postslist: any[] = [];


  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      (data) => {
        this.postslist = data; 
        console.debug('postssssssssssss:', this.postslist.toString);
      },
      (error) => {
        console.error('Erreur lors de la récupération des posts:', error);
      }
    );
  }
  navigateToPostItem(postId: number) {
    this.router.navigate([`/postItem/${postId}`]);
  }
}
