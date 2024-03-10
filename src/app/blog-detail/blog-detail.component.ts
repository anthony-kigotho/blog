// blog-detail.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Observable } from 'rxjs';
import { BlogPost } from '../blog-post'; 
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'blog-detail.component.html',
  styleUrl: 'blog-detail.component.html'
})
export class BlogDetailComponent {
  @Input() set postId(postId: string) {
    this.post$ = this.blogService.getBlogPost(postId);
  }

  post$!: Observable<BlogPost | undefined>;

  constructor(private blogService: BlogService) {}
}