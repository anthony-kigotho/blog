import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const appRoutes: Routes= [
  { path: '', component: BlogListComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blog/:postId', component: BlogDetailComponent, data: { title: 'Blog Detail' } },  
];
