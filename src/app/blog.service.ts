// blog.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from './blog-post'; 

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    { id: '1', title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { id: '2', title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    // Add more blog posts as needed
  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPost(postId: string): Observable<BlogPost | undefined> {
    const post = this.blogPosts.find((p) => p.id === postId);
    return of(post);
  }
}
