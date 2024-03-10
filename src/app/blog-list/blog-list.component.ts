// blog-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  showBlogs = true;
  blogPosts = this.blogService.getBlogPosts();

  constructor(private router: Router, private blogService: BlogService) {}

  viewBlogDetails(postId: string) {
    this.showBlogs = false;
    this.router.navigate(['/blog', postId]);
  }
}
